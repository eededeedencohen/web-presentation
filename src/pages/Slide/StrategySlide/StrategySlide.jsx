import react from "react";
import styles from "./StrategySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock.jsx";
import StrategyCard from "../../../components/Cards/StrategyCard/StrategyCard.jsx";
//perspective-icon
//plant-leaf
// snowed-mountains

export default function StrategySlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"האסטרטגיה שלנו לצמיחה: שלושה עמודי תווך"}
          width="70%"
          fontSize="3rem"
        />
      </div>
      <div className={styles.cardsArea}>
        <StrategyCard
          iconName={"snowed-mountains"}
          title={"כיבוש הפסגות"}
          text={
            "מיקוד בקמפיינים המרכזיים סביב החגים, המהווים את מנוע ההכנסה העיקרי"
          }
        />
        <StrategyCard
          iconName={"plant-leaf"}
          title={"צמיחה משולבת"}
          text={
            "מינוף מנוע צמיחה חברתי-עסקי המחבר בין יצירה ומשמעות לבין קיימות כלכלית בה האדם עם המוגבלות הוא שותף מלא"
          }
        />
        <StrategyCard
          iconName={"perspective-icon"}
          title={"בניית הבסיס"}
          text={
            "יצירת הכנסה שנתית יציבה ורציפה מפעילות שוטפת ומוצרי Mass Market"
          }
        />
      </div>
    </div>
  );
}
