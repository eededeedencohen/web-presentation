import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import styles from "./SeasonalityChart.module.css";

//  ₪  41,666 
//  ₪  41,666 
//  ₪  191,666 
//  ₪  191,666 
//  ₪  41,666 
//  ₪  41,666 
//  ₪  41,666 
//  ₪  41,666 
//  ₪  241,666 
//  ₪  154,166 
//  ₪  41,666 
//  ₪  41,666 

// 1. הנתונים האמיתיים (הצורה הסופית)
const realData = [
  { name: "1", uv: 41666 },
  { name: "2", uv: 41666 },
  { name: "3", uv: 191666 },
  { name: "4", uv: 191666 },
  { name: "5", uv: 41666 },
  { name: "6", uv: 41666 },
  { name: "7", uv: 41666 },
  { name: "8", uv: 41666 },
  { name: "9", uv: 241666 },
  { name: "10", uv: 154166 },
  { name: "11", uv: 41666 },
  { name: "12", uv: 41666 },
];

// 2. נתוני ההתחלה - קו שטוח (הכל 0)
// יצרנו העתק של המבנה אבל עם ערכים מאופסים כדי שהגרף יתחיל מהרצפה
const initialData = realData.map((item) => ({ ...item, uv: 0 }));

const CustomizedAnnotation = (props) => {
  const { x, y, index } = props;

  // מציגים רק בנקודות השיא
  if (index !== 3 && index !== 8) return null;

  const isPassover = index === 3;
  const title = isPassover ? "שיא הכנסות" : "שיא הכנסות ראש";
  const subTitle = isPassover ? "פסח ופורים" : "השנה ושמחת תורה";

  return (
    // שינויים שבוצעו:
    // 1. x={x - 100}: מרכוז אופקי מושלם (חצי מרוחב 200)
    // 2. y={y - 120}: מיקום אנכי כך שהתחתית של ה-foreignObject תיגע בדיוק בקו
    <foreignObject x={x - 100} y={y - 100} width={200} height={120}>
      <div className={`${styles.annotationContainer} ${styles.fadeIn}`}>
        <div className={styles.textBox}>
          <strong>{title}</strong>
          <br />
          {subTitle}
        </div>
        <div className={styles.arrowPoint}></div>
      </div>
    </foreignObject>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{`חודש ${label}`}</p>
        <p className={styles.tooltipValue}>
          {`₪${payload[0].value.toLocaleString()}`}
        </p>
      </div>
    );
  }
  return null;
};

function SeasonalityChart() {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(realData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={100}
        minWidth={300}
      >
        <AreaChart
          data={chartData}
          // שינוי 1: הגדלתי את ה-bottom ל-20 כדי שהמספרים בציר ה-X לא יחתכו
          margin={{ top: 50, right: 10, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--purple)" stopOpacity={1} />
              <stop offset="50%" stopColor="var(--purple)" stopOpacity={1} />
              <stop offset="95%" stopColor="var(--green)" stopOpacity={1} />
            </linearGradient>

            <filter id="shadow" height="200%">
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="5"
                floodColor="#8e24aa"
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            // שינוי 2: הזזתי את הטקסט קצת למטה (dy) והקטנתי פונט במקרה הצורך
            tick={{ fill: "#666", fontSize: 12, fontWeight: "bold" }}
            dy={15}
            interval={0} // מבטיח שכל המספרים יוצגו (אופציונלי)
          />
          <YAxis
            hide={false}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fill: "#999", fontSize: 12 }}
            width={40} // קיבעתי רוחב כדי שלא יזוז
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#6a1b9a"
            strokeWidth={4}
            fill="url(#colorUv)"
            filter="url(#shadow)"
            isAnimationActive={true}
            animationDuration={2000}
            animationEasing="ease-in-out"
          >
            <LabelList dataKey="uv" content={<CustomizedAnnotation />} />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SeasonalityChart;
