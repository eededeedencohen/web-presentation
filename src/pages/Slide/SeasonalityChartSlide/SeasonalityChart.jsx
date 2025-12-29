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
  if (index !== 2 && index !== 8) return null;

  const isPassover = index === 2;
  const title = isPassover ? "שיא הכנסות" : "שיא הכנסות ראש";
  const subTitle = isPassover ? "פסח ופורים" : "השנה ושמחת תורה";

  // --- השינוי כאן ---
  // אם זה פסח (אינדקס 3), נזיז ימינה בכ-55 פיקסלים כדי שיהיה באמצע בין 3 ל-4
  // אם זה תשרי (אינדקס 8), נשאיר ב-0 כי הוא כבר בשיא
  const xShift = isPassover ? 70 : 0;
  // ------------------

  return (
    // הוספנו את xShift לחישוב ה-x
    <foreignObject x={x - 100 + xShift} y={y - 80} width={200} height={120}>
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

const CustomYAxisTick = ({ x, y, payload }) => {
  const isTargetValue = payload.value === 41666; // הבדיקה אם זה המספר המיוחד

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={15}
        y={-12}
        dy={4} // יישור אנכי למרכז
        textAnchor="end" // יישור לימין (כי הציר בצד שמאל)
        fill={isTargetValue ? "#6a1b9a" : "#999"} // אופציונלי: צבעתי בסגול כהה אם זה המיוחד, אחרת אפור
        fontWeight={isTargetValue ? "bold" : "normal"} // כאן הקסם קורה
        fontSize={18}
      >
        {/* לוגיקת התצוגה (כמו שעשינו מקודם) */}
        {isTargetValue
          ? "41.6k"
          : payload.value === 0
          ? "0"
          : `${Math.round(payload.value / 1000)}k`}
      </text>
    </g>
  );
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
            tick={{ fill: "#666", fontSize: 20, fontWeight: "bold" }}
            dy={15}
            interval={0} // מבטיח שכל המספרים יוצגו (אופציונלי)
          />
          <YAxis
            hide={false}
            axisLine={false}
            tickLine={false}
            // רשימת הערכים שרוצים להציג
            ticks={[0, 41666, 65000, 130000, 195000, 260000]}
            // כאן אנחנו קוראים לקומפוננטה המיוחדת שיצרנו למעלה
            tick={<CustomYAxisTick />}
            width={45}
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
