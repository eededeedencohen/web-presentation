import React from "react";
import styles from "./ResourceNeedsSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import ResourceRequirementCard from "../../../components/Cards/ResourceRequirementCard/ResourceRequirementCard";


const operationalNeedsData = [
  {
    id: 1,
    title: "פתרון אחסון נוסף:",
    description: "לתמיכה בגידול המלאי",
    icon: "warehouse", 
  },
  {
    id: 2,
    title: "איש מכירות טלפוני נוסף:",
    // 
    description: "להנעת מכירות החגים ומוצרי ה-Mass (הזדמנות הכנסה של 262,500 ₪)",
    icon: "call-center",
  },
  {
    id: 3,
    title: "התקשרות עם חברת הפצה",
    description: "לייעול ופתרון עלויות השילוח",
    icon: "fast-delivery",
  },
  {
    id: 4,
    title: "אחראי לוגיסטיקה",
    description: "חיוני לניהול ערוץ המכירות הקמעונאי (הזדמנות רווח של 175,000)",
    icon: "logistics-management",
  },
];
function ResourceNeedsSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"המשאבים הנדרשים להצלחת התוכנית"}
          subtitle={
            "כדי לממש את הפוטנציאל ולהשיג את היעדים, נדרשים המשאבים הבאים:"
          }
          width="80%"
        />
      </div>
      <div className={styles.titlesArea}>
        <div className={styles.title1Area}>
          <h1>כוח אדם</h1>
        </div>
        <div className={styles.title2Area}>
          <h1>תפעול</h1>
        </div>
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <ResourceRequirementCard 
          iconName={operationalNeedsData[1].icon}
          title={operationalNeedsData[1].title}
          text={operationalNeedsData[1].description}
          />
        </div>
        <div className={styles.cardWrapper}>
          <ResourceRequirementCard 
          iconName={operationalNeedsData[0].icon}
          title={operationalNeedsData[0].title}
          text={operationalNeedsData[0].description}
          />
        </div>

        <div className={styles.cardWrapper}>
          <ResourceRequirementCard 
          iconName={operationalNeedsData[3].icon}
          title={operationalNeedsData[3].title}
          text={operationalNeedsData[3].description}
          />
        </div>

        <div className={styles.cardWrapper}>
          <ResourceRequirementCard 
          iconName={operationalNeedsData[2].icon}
          title={operationalNeedsData[2].title}
          text={operationalNeedsData[2].description}
          />
        </div>
      </div>
    </div>
  );
}
export default ResourceNeedsSlide;
