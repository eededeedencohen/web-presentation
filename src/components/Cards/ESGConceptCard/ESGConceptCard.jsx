import react from "react";
import styles from "./ESGConceptCard.module.css";
import IconHeading from "../../IconHeading/IconHeading.jsx";

function ESGConceptCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.contentWrapper}>
        <IconHeading
          iconName="gift-card"
          headingText="הקונספט"
          iconWidth="var(--icon-size)"
          iconHeight="var(--icon-size)"
          color="var(--purple)"
          className={styles.iconHeading}
        />
        <div className={styles.contentText}>
          <p>פיתוח תו שי לעובדים (בשווי כ–500 ₪) המכובד רק בעסקים חברתיים.</p>
          <p>
            הפתרון מעניק לארגונים אפשרות לעמוד ביעדי אחריות חברתית (ESG) ומטיב
            תקציבי רווחה להשפעה חברתית ישירה.
          </p>
        </div>
        {/* <div className={styles.incomeWrapper}>
          <h2>₪375,000</h2>
        </div> */}
      </div>
    </div>
  );
}

export default ESGConceptCard;
