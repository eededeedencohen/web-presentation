import React from "react";

const ModalContant = () => {
  return (
    <div
      style={{
        padding: "30px",
        direction: "rtl",
        textAlign: "right",
        color: "#333",
      }}
    >
      <h2
        style={{
          color: "var(--purple)",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        משמעות "התו החברתי"
      </h2>

      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            color: "var(--green)",
            fontSize: "1.4rem",
            marginBottom: "10px",
          }}
        >
          מהו התו החברתי?
        </h3>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          התו החברתי הוא סמל לאיכות ולערכים. מוצר הנושא תו זה מעיד כי יוצר על
          ידי אנשים עם מוגבלויות במסגרת תעסוקתית מכבדת, המקדמת שילוב בקהילה
          ועצמאות כלכלית.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>
            ערך ללקוח (B2B)
          </h4>
          <p>העצמת המותג הארגוני באמצעות רכישת מתנות עם ערך מוסף (ESG).</p>
        </div>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>ערך ליוצר</h4>
          <p>תחושת גאווה, שייכות ומשמעות ביצירה שנמכרת בחנויות מובילות.</p>
        </div>
      </div>
    </div>
  );
};

export default ModalContant;
