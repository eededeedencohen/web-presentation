import React from "react";
import styles from "./B2BExpansionSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import IconSVG from "../../../components/IconSVG/IconSVG";
import B2BFinancialPotentialCard from "../../../components/Cards/B2BFinancialPotentialCard/B2BFinancialPotentialCard.jsx";
import productsImage from "../../../assets/images/products.png";


function B2BExpansionSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"כיבוש הפסגות - מיקוד במכירות שיא בחגים"}
          width="70%"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: "₪662,500
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.modelCardWrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.label}>המודל</h1>
            <div className={styles.contentText}>
              מכירת מוצרים ממותגים של 'שק"ל לאהוב' במחיר סיטונאי לרשתות מובילות
              (דוגמת רמי לוי, שופרסל, חנן) להפצה לצרכן הסופי.
            </div>
          </div>
          <div className={styles.iconWrapper}>
            <IconSVG
              iconName="partnership"
              width="120px"
              height="120px"
              color="white"
            />
          </div>
        </div>
        <div className={styles.potencialCardWrapper}>
          <B2BFinancialPotentialCard />
        </div>
      </div>
      <div className={styles.imageArea}>
        <div className={styles.imageWrapper}>
          <img src={productsImage} alt="Products" />
        </div>
      </div>
    </div>
  );
}
export default B2BExpansionSlide;
