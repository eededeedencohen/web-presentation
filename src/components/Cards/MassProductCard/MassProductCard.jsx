import react from "react";
import styles from "./MassProductCard.module.css";


export default function MassProductCard({ image, 
    name, cost, price, profit, color, imageSize,
    imageOffsetY = "0px" }) {
  const dynamicStyle = {
    "--imageOffsetY": imageOffsetY,
    "--cardColor": color,
    "--imageSize": imageSize,
  }
  return (
    <div className={styles.container} style={dynamicStyle}>
      <div className={styles.productNameArea}>
        <h2>{name}</h2>
      </div>
      <div className={styles.productImageArea}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.productInfoArea}>
        <div className={styles.cost}>
          <p>עלות: ₪{cost}</p>
        </div>
        <div className={styles.price}>
          <p>מחיר: ₪{price}</p>
        </div>
        <div className={styles.profit}>
          <p>רווח: ₪{profit}</p>
        </div>
      </div>
    </div>
  );
}
