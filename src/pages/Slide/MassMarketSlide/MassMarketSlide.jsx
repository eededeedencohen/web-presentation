import styles from "./MassMarketSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import MassProductCard from "../../../components/Cards/MassProductCard/MassProductCard";
import notebooksImage from "../../../assets/Images/notebooks.png";
import calendarImage from "../../../assets/Images/calendar.png";
function MassMarketSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"בניית הבסיס - הכנסה שוטפת של ₪500,000 ממוצרי MASS"}
          width="75%"
          fontSize="2.5rem"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        <h2 className={styles.subtitleText}>
          במקביל לפיקים של החגים, נבנה בסיס הכנסות יציב מפעילות שוטפת דרך מכירת
          מוצרי הדפוס והסטודיו החברתי שלנו.
        </h2>
      </div>
      <div className={styles.labelArea}>
        <h2 className={styles.labelText}> דוגמאות למוצרים ורווחיותם:</h2>
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <MassProductCard
            image={notebooksImage}
            name="מחברות A5"
            cost={10}
            price={20}
            profit={10}
            color="var(--purple)"
            imageOffsetY="-10%"
            imageSize="35%"
          />
        </div>
        <div className={styles.cardWrapper}>
          <MassProductCard
            image={calendarImage}
            name="לוח שנה"
            cost={15}
            price={30}
            profit={15}
            color="var(--green)"
            imageOffsetY="5%"
            imageSize="55%"
          />
        </div>
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.summaryCardArea}>
          <p className={styles.summaryTitle}>ציון פוטנציאל:</p>
          <p className={styles.summaryContent}>
            פוטנציאל מכירת 200 לוחות שנה ל־20 ארגונים:
          </p>
          <p className={styles.summaryAmount}>100,000 ₪ הכנסה.</p>
        </div>
      </div>
    </div>
  );
}
export default MassMarketSlide;
