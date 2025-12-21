import React from "react";
import styles from "./HolidayRevenueCard.module.css";

function HolidayRevenueCard({ image, title, revenue, destination }) {
  const formattedRevenue = Number(revenue).toLocaleString();

  return (
    <div className={styles.holidayCard}>
      <img src={image} alt={title} className={styles.holidayImage} />

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.revenue}>
          הכנסה צפויה: <strong>{formattedRevenue} ₪</strong>
        </div>
        <div className={styles.destination}>({destination})</div>
      </div>
    </div>
  );
}

export default HolidayRevenueCard;
