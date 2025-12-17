// components/GenerativeWave/GenerativeWave.jsx
import React from "react";

export default function GenerativeWave({
  color = "rgba(255,255,255,0.2)",
  width = "100%",
  height = "100%",
}) {
  const linesCount = 25; // יותר קווים למראה צפוף ועשיר

  const lines = Array.from({ length: linesCount }, (_, i) => {
    const progress = i / linesCount;

    // נקודת התחלה: כולם מתחילים בפינה השמאלית למטה (עם הזזה קלה)
    const startX = -20 + progress * 50;
    const startY = 120; // קצת מתחת לגבול התחתון

    // נקודת סיום: מתפרסים למעלה וקצת ימינה
    const endX = 100 + progress * 200;
    const endY = -20; // קצת מעל הגבול העליון

    // נקודות שליטה ליצירת העיקול (Curvature)
    const cp1x = 50 + progress * 100;
    const cp1y = 80; // מושך למטה
    const cp2x = 80 + progress * 50;
    const cp2y = 20; // מושך למעלה

    return (
      <path
        key={i}
        d={`M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`}
        fill="none"
        stroke={color}
        strokeWidth="0.8" // קווים דקים יותר
        opacity={0.3 + progress * 0.4} // שקיפות משתנה
      />
    );
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 100" // ViewBox מותאם לפרופורציות של כותרת
      preserveAspectRatio="none" // מותח את הגלים על כל השטח
      style={{ overflow: "visible" }}
    >
      {lines}
    </svg>
  );
}
