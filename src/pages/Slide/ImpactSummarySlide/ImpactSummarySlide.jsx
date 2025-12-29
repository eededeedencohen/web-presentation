import React, { useState } from "react";
import styles from "./ImpactSummarySlide.module.css";
import HeaderBlock from "../../../components/HeaderBlock/HeaderBlock";
import SummaryImage from "../../../assets/Images/summary.png";
import ImpactKpiCard from "../../../components/Cards/ImpactKpiCard/ImpactKpiCard";
import Modal from "../../../components/Modal/Modal.jsx";
import { InventoryTable } from "../../../Modals/ModalTables/ModalTables.jsx";
import { ProductDetailsView } from "../../../Modals/ModalViewComponents/ModalViewComponents.jsx";
// import { MultiTableCarousel } from "../../../Modals/ModalViewComponents/MultiTableCarousel.jsx";
import { MultiTableCarousel } from "../../../Modals/ModalTables/MultiTableCarousel.jsx";

function ImpactSummarySlide() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // נתונים מלאים מתוך קובץ: file3 - מלאי מחסנים.csv
  const inventoryData = [
    {
      productName: "מארזי תה שלוותי",
      sku: "",
      quantity: 27,
      price: 40,
      potentialIncome: "₪1,080",
    },
    {
      productName: "פמוטים - פרחים ורודים",
      sku: "CAL - 9",
      quantity: 1463,
      price: 75,
      potentialIncome: "₪109,725",
    },
    {
      productName: "פמוטים - שבעת המינים",
      sku: "CAL - 8",
      quantity: 1457,
      price: 75,
      potentialIncome: "₪109,275",
    },
    {
      productName: "קערות במבוק - שבעת המינים",
      sku: "BMB - 1D",
      quantity: 350,
      price: 49,
      potentialIncome: "₪17,150",
    },
    {
      productName: "קערות במבוק - צמחי תבלין",
      sku: "BMB - 6G",
      quantity: 950,
      price: 49,
      potentialIncome: "₪46,550",
    },
    {
      productName: "תחתית סירים - כשמגיעים",
      sku: "354",
      quantity: 354,
      price: 25,
      potentialIncome: "₪8,850",
    },
    {
      productName: "תחתית סירים - אני רותח",
      sku: "345",
      quantity: 345,
      price: 25,
      potentialIncome: "₪8,625",
    },
    {
      productName: "תחתית סירים - דגים צהוב",
      sku: "155",
      quantity: 155,
      price: 25,
      potentialIncome: "₪3,875",
    },
    {
      productName: "תחתית סירים - תוכי כחול",
      sku: "140",
      quantity: 140,
      price: 25,
      potentialIncome: "₪3,500",
    },
    {
      productName: "תחתית סירים - שבעת המינים",
      sku: "1051",
      quantity: 1051,
      price: 25,
      potentialIncome: "₪26,275",
    },
    {
      productName: "תחתית סירים - פרחים ירוק",
      sku: "155",
      quantity: 155,
      price: 25,
      potentialIncome: "₪3,875",
    },
    {
      productName: "תחתית קפה - שבעת המינים",
      sku: "987",
      quantity: 987,
      price: 59,
      potentialIncome: "₪58,233",
    },
    {
      productName: "תחתית קפה - דגים צהוב",
      sku: "622",
      quantity: 622,
      price: 59,
      potentialIncome: "₪36,698",
    },
    {
      productName: "תחתית קפה - קפה שחור",
      sku: "576",
      quantity: 576,
      price: 59,
      potentialIncome: "₪33,984",
    },
    {
      productName: "סט 3 קופ' במבוק",
      sku: "620",
      quantity: 620,
      price: 69,
      potentialIncome: "₪42,780",
    },
    {
      productName: "נטלה",
      sku: "720",
      quantity: 720,
      price: 39,
      potentialIncome: "₪28,080",
    },
    {
      productName: "כפות במבוק",
      sku: "950",
      quantity: 950,
      price: 29,
      potentialIncome: "₪27,550",
    },
    {
      productName: "מגש במבוק קטן",
      sku: "990",
      quantity: 990,
      price: 29,
      potentialIncome: "₪28,710",
    },
    {
      productName: "מגש במבוק גדול",
      sku: "1020",
      quantity: 1020,
      price: 49,
      potentialIncome: "₪49,980",
    },
    {
      productName: 'הגדה של פסח "רפאל"',
      sku: "250",
      quantity: 250,
      price: 26,
      potentialIncome: "₪6,500",
    },
    {
      productName: 'הגדה של פסח "רפאל"- באהבה שק"ל',
      sku: "52",
      quantity: 52,
      price: 26,
      potentialIncome: "₪1,352",
    },
    {
      productName: "יקב ירושלים יין 750 מל קב' ס.",
      sku: "30",
      quantity: 30,
      price: 25,
      potentialIncome: "₪750",
    },
    {
      productName: "יקב ירושלים יין 750 מל מלבק/שיראז",
      sku: "20",
      quantity: 20,
      price: 35,
      potentialIncome: "₪700",
    },
    {
      productName: "גפרורים שבת שלום",
      sku: "10",
      quantity: 10,
      price: 15,
      potentialIncome: "₪150",
    },
    {
      productName: "פאזל אינשטיין",
      sku: "29",
      quantity: 29,
      price: 49,
      potentialIncome: "₪1,421",
    },
    {
      productName: "לבבות זרעי משאלות",
      sku: "600",
      quantity: 600,
      price: 15,
      potentialIncome: "₪9,000",
    },
    {
      productName: "נרות שולחן לבן גולמי",
      sku: "300",
      quantity: 300,
      price: 5,
      potentialIncome: "₪1,500",
    },
    {
      productName: "ראנר פסח",
      sku: "150",
      quantity: 150,
      price: 79,
      potentialIncome: "₪11,850",
    },
    {
      productName: "ראנר 7 המינים",
      sku: "40",
      quantity: 40,
      price: 79,
      potentialIncome: "₪3,160",
    },
    {
      productName: "סדר הדלקה חנוכה+שמש",
      sku: "250",
      quantity: 250,
      price: 10,
      potentialIncome: "₪2,500",
    },
    {
      productName: "כריות לב קטן רגיל+רקום",
      sku: "650",
      quantity: 650,
      price: 25,
      potentialIncome: "₪16,250",
    },
    {
      productName: "כריות לב גדול רגיל",
      sku: "100",
      quantity: 100,
      price: 30,
      potentialIncome: "₪3,000",
    },
    {
      productName: "כריות לב גדול רקום",
      sku: "100",
      quantity: 100,
      price: 35,
      potentialIncome: "₪3,500",
    },
    {
      productName: "שקיות בשמים 7 המינים ממולאות",
      sku: "120",
      quantity: 120,
      price: 20,
      potentialIncome: "₪2,400",
    },
    {
      productName: "שקיות בשמים חלקות לסוב' שמנת",
      sku: "451",
      quantity: 451,
      price: 10,
      potentialIncome: "₪4,510",
    },
    {
      productName: "שקיות בשמים חלקות לסוב' לבן",
      sku: "108",
      quantity: 108,
      price: 10,
      potentialIncome: "₪1,080",
    },
    {
      productName: "שקיות לגודל אפיקומן חלקות שמנת",
      sku: "770",
      quantity: 770,
      price: 25,
      potentialIncome: "₪19,250",
    },
    {
      productName: "שקיות לגודל אפיקומן חלקות לבן",
      sku: "900",
      quantity: 900,
      price: 25,
      potentialIncome: "₪22,500",
    },
    {
      productName: "חנוכיות קרמיקה",
      sku: "10",
      quantity: 10,
      price: 65,
      potentialIncome: "₪650",
    },
    {
      productName: "שקיות בד סוב' חלקות לבן 19X15 לבן",
      sku: "1408",
      quantity: 1408,
      price: 5,
      potentialIncome: "₪7,040",
    },
    {
      productName: "שקיות בד סוב' אורגנזה לבן 19X15 לבן",
      sku: "200",
      quantity: 200,
      price: 5,
      potentialIncome: "₪1,000",
    },
    {
      productName: "כוסות תרמיות מעוצבות",
      sku: "50",
      quantity: 50,
      price: 25,
      potentialIncome: "₪1,250",
    },
  ];
  return (
    <div className={styles.slidePage}>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {/* מחקנו את ProductDetailsView ושמנו את הטבלה המלאה */}
        {/* <InventoryTable data={inventoryData} onClose={closeModal} /> */}
        <MultiTableCarousel onClose={closeModal} />
      </Modal>
      <div className={styles.headerArea} onClick={openModal}>
        <HeaderBlock
          text={"2026: לא רק יעד פיננסי, אלא מכפיל כוח להשפעה חברתית"}
          width="70%"
          fontSize="2.3rem"
          className={styles.header} // TO DO: Remove this class at the end
        />
      </div>
      צמיחה של פי 21 ברווחיות
      <div className={styles.cardsArea}>
        <ImpactKpiCard
          icon="rocket-launch"
          title="צמיחה של פי"
          content="17.4 ברווחיות"
        />
        <ImpactKpiCard icon="handshake" title="יעד רווח" content="₪283,900" />
        <ImpactKpiCard
          icon="profits"
          title="יעד הכנסות"
          // content="מעל 1.1 מיליון"
          content="מעל 1.1 מיליון ₪"
        />
      </div>
      <div className={styles.summaryArea}>
        <div className={styles.summaryCardArea}>
          <div className={styles.summaryImageWrapper}>
            <img src={SummaryImage} alt="Summary" />
          </div>
          <div className={styles.summarySentenceWrapper}>
            <p>
              תוכנית 2026 היא המנוע שלנו להעצמת אמני שק"ל, להרחבת ההשפעה החברתית
              שלנו, ולבניית עתיד כלכלי עצמאי. כל שקל של רווח הוא צעד נוסף במימוש
              החזון המשותף שלנו.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImpactSummarySlide;
