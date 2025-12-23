import react from "react";
import styles from "./B2BFinancialPotentialCard.module.css";
import IconSVG from "../../../components/IconSVG/IconSVG";

function B2BFinancialPotentialCard() {
  return (
    <>
      <div className={styles.contentWrapper}>
        <h1 className={styles.label}>הפוטנציאל הפיננסי</h1>
        <div className={styles.contentText}>
          תחזית ראשונית (מבוססת 5 שיתופי פעולה שנתיים):
        </div>
        <div className={styles.incomeWrapper}>
          <h3>הכנסות:</h3>
          <h2>₪375,000</h2>
        </div>
        <div className={styles.profitWrapper}>
          <h3>רווח:</h3>
          <h2>₪112,500</h2>
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <IconSVG
          iconName="chart"
          width="var(--icon-size)"
          height="var(--icon-size)"
          color="white"
        />
      </div>
    </>
  );
}

export default B2BFinancialPotentialCard;
