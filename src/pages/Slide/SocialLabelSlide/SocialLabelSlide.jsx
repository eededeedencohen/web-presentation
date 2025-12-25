import React from "react";
import styles from "./SocialLabelSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import IconSVG from "../../../components/IconSVG/IconSVG";
import ESGConceptCard from "../../../components/Cards/ESGConceptCard/ESGConceptCard.jsx";
import ESGPotencialCard from "../../../components/Cards/ESGPotencialCard/ESGPotencialCard.jsx";
import socialImage from "../../../assets/Images/social-card.png";

function SocialLabelSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"הזדמנות אסטרטגית: כניסה לשוק הקמעונאי (B2B)"}
          width="70%"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: "₪662,500
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.potencialCardWrapper}>
          <ESGConceptCard />
        </div>
        <div className={styles.conceptCardWrapper}>
          <ESGPotencialCard />
        </div>
      </div>
      <div className={styles.imageArea}>
        <div className={styles.imageWrapper}>
          <img src={socialImage} alt="Products" />
        </div>
      </div>
    </div>
  );
}
export default SocialLabelSlide;
