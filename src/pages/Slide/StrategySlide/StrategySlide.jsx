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
        text={"האסטרטגיה שלנו לצמיחה"}
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
          iconName={"perspective-icon"}
          title={"בניית הבסיס"}
          text={
            "יצירת הכנסה שנתית יציבה ורציפה מפעילות שוטפת ומוצרי Mass Market"
          }
        />
        <StrategyCard
          iconName={"plant-leaf"}
          title={"זריעת העתיד"}
          text={
            "פיתוח מנועי צמיחה חדשניים להבטחת קיימות וגיוון מקורות הכנסה לטווח הארוך"
          }
        />
      </div>
    </div>
  );
}
