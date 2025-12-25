import React from "react";
import styles from "./HolidayRevenueSlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import HolidayRevenueCard from "../../../components/Cards/HolidayRevenueCard/HolidayRevenueCard";
import passoverImage from "../../../assets/Images/passover.png";
import purimImage from "../../../assets/Images/purim.png";
import roshHashanahImage from "../../../assets/Images/rosh-hashanah.png";
import simchatTorahImage from "../../../assets/Images/simchat-torah.png";

const data = {
  title: "כיבוש הפסגות - מיקוד במכירות שיא בחגים",
  organization: 'מתנות שק"ל לאהוב',
  total_revenue_target: 612500,
  currency: "NIS",
  holidays_breakdown: {
    purim: {
      holiday: "פורים (משלוחי מנות)",
      description: "משלוחי מנות",
      expected_revenue: 200000,
      target_audience: "מ-50 בתי ספר",
    },
    roshHashanah: {
      holiday: "ראש השנה",
      description: null,
      expected_revenue: 200000,
      target_audience: "מ-30 חברות",
    },
    passover: {
      holiday: "פסח",
      description: null,
      expected_revenue: 150000,
      target_audience: "מ-30 חברות",
    },
    simchatTorah: {
      holiday: "שמחת תורה (שקיות ממתקים)",
      description: "שקיות ממתקים",
      expected_revenue: 112500,
      target_audience: "מ-50 בתי כנסת",
    },
  },
};

function HolidayRevenueSlide() {
  return (
    <div className={styles.slidePage}>
      <div className={styles.headerArea}>
        <HeaderBlock
          text={"כיבוש הפסגות - מיקוד במכירות שיא בחגים"}
          width="75%"
          fontSize="3rem"
        />
      </div>
      <div className={styles.subtitleArea}>
        יעד הכנסות כולל מהחגים: ₪662,500
      </div>
      <div className={styles.cardsArea}>
        <div className={styles.cardWrapper}>
          <HolidayRevenueCard
            image={purimImage}
            title={data.holidays_breakdown.purim.holiday}
            revenue={data.holidays_breakdown.purim.expected_revenue}
            destination={data.holidays_breakdown.purim.target_audience}
          />
        </div>
        <div className={styles.cardWrapper}>
          <HolidayRevenueCard
            image={roshHashanahImage}
            title={data.holidays_breakdown.roshHashanah.holiday}
            revenue={data.holidays_breakdown.roshHashanah.expected_revenue}
            destination={data.holidays_breakdown.roshHashanah.target_audience}
          />
        </div>

        <div className={styles.cardWrapper}>
          <HolidayRevenueCard
            image={passoverImage}
            title={data.holidays_breakdown.passover.holiday}
            revenue={data.holidays_breakdown.passover.expected_revenue}
            destination={data.holidays_breakdown.passover.target_audience}
          />
        </div>

        <div className={styles.cardWrapper}>
          <HolidayRevenueCard
            image={simchatTorahImage}
            title={data.holidays_breakdown.simchatTorah.holiday}
            revenue={data.holidays_breakdown.simchatTorah.expected_revenue}
            destination={data.holidays_breakdown.simchatTorah.target_audience}
          />
        </div>
      </div>
    </div>
  );
}
export default HolidayRevenueSlide;
