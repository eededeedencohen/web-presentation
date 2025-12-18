import React from "react";
import styles from "./CostSavingCard.module.css";
import exsampleImage from "../../../assets/Images/hagada.jpg";

// const formattedRevenue = Number(revenue).toLocaleString();
// הבחירה האופטימלית חוסכת לנו 42% בעלות.

function CostSavingCard({
  image,
  title,
  contentProduct,
  contentSavings,
  highestPrice,
  lowestPrice,
  className = "",
  ...props
}) {
  return (
    <div className={`${styles.costSavingCard} ${className}`} {...props}>
      <img src={image} alt={title} className={styles.productImage} />

      <div className={styles.content}>
        <div className={styles.contentProduct}>{contentProduct}</div>
        <div className={styles.contentSavings}>{contentSavings}</div>
      </div>

      <div className={styles.prices}>
        <div className={styles.highestPrice}>
          <span className={styles.strikethrough}>{highestPrice} ₪</span>
        </div>
        <div className={styles.arrow}></div>
        <div className={styles.lowestPrice}>
          <span className={styles.currentPrice}>{lowestPrice} ₪</span>
        </div>
      </div>
    </div>
  );
}

export default CostSavingCard;
