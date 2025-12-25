import React from "react";
import styles from "./CostEfficiencySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import CostSavingCard from "../../../components/Cards/CostSavingCard/CostSavingCard";
import hagadaImage from "../../../assets/Images/hagada.jpg";
import notebooksImage from "../../../assets/Images/notebooks2.png";
import bagsImage from "../../../assets/Images/bags.png";
const examplesData = [
  {
    id: 1,
    title: "דוגמה 1: הגדה של פסח (500 יח')",
    subtitle: "הבחירה האופטימלית חוסכת לנו 42% בעלויות.",
    priceHigh: 11500,
    priceLow: 6650,
    image: hagadaImage,
  },
  {
    id: 2,
    title: "דוגמה 2: שקיות כותנה ואלבד (500 יח')",
    subtitle: "הבחירה האופטימלית חוסכת לנו 61% בעלויות.",
    priceHigh: 6500,
    priceLow: 2500,
    image: bagsImage,
  },
  {
    id: 3,
    title: "דוגמה 3: מחברות A5 (1000 יח')",
    subtitle: "הבחירה האופטימלית חוסכת לנו 37% בעלויות.",
    priceHigh: 15900,
    priceLow: 11500,
    image: notebooksImage,
  },
];
function CostEfficiencySlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"ניהול עלויות אסטרטגי:"}
          subtitle="הגדלת הרווחיות דרך מכרז ספקים"
          width="70%"
          fontSize="3rem"
          subFontSize="2.5rem"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        <h2 className={styles.subtitleText}>
          יצאנו למכרז הפקות דפוס מקיף מול 7 ספקים מובילים עבור 13 מוצרים
          מרכזיים. התוצאה: הוזלה משמעותית של עלויות הייצור.
        </h2>
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <CostSavingCard
            image={examplesData[0].image}
            contentProduct={examplesData[0].title}
            contentSavings={examplesData[0].subtitle}
            highestPrice={examplesData[0].priceHigh}
            lowestPrice={examplesData[0].priceLow}
            className={styles.firstCard}
          />
        </div>
        <div className={styles.cardWrapper}>
          <CostSavingCard
            image={examplesData[1].image}
            contentProduct={examplesData[1].title}
            contentSavings={examplesData[1].subtitle}
            highestPrice={examplesData[1].priceHigh}
            lowestPrice={examplesData[1].priceLow}
            className={styles.secondCard}
          />
        </div>
        <div className={styles.cardWrapper}>
          <CostSavingCard
            image={examplesData[2].image}
            contentProduct={examplesData[2].title}
            contentSavings={examplesData[2].subtitle}
            highestPrice={examplesData[2].priceHigh}
            lowestPrice={examplesData[2].priceLow}
            className={styles.thirdCard}
          />
        </div>
      </div>
    </div>
  );
}
export default CostEfficiencySlide;
