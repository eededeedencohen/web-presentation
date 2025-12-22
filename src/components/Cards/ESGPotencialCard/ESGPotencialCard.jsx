import react from "react";
import styles from "./ESGPotencialCard.module.css";
import IconHeading from "../../IconHeading/IconHeading.jsx";

function ESGPotencialCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.contentWrapper}>
        <IconHeading
          iconName="dollars"
          headingText="הפוטנציאל הפיננסי"
          iconWidth="60px"
          iconHeight="60px"
          color="var(--purple)"
          className={styles.iconHeading}
        />
        <div className={styles.contentText}>
          <p>תחזית ראשונית (מבוססת 10 שיתופי פעולה שנתיים):</p>
          <p>הכנסות (ברוטו): <b>₪6,000,000 </b>
          </p>
        </div>
        <div className={styles.profitWrapper}>
          <h2>רווח צפוי: 250,000 ₪</h2>
        </div>
      </div>
    </div>
  );
}

export default ESGPotencialCard;
