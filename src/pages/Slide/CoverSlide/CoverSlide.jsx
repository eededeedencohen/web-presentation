import React, { useRef, useState, useLayoutEffect } from "react";
import styles from "./CoverSlide.module.css";
// import CircularShadowImage from "../../../components/CircularShadowImage/CircularShadowImage"; // לא בשימוש בפתרון זה, אנו משתמשים ב-img רגיל

// וודא שהנתיבים לתמונות נכונים אצלך בפרויקט
import Image1 from "../../../assets/Images/image-cover1.png"; // התמונה הגדולה (מימין - בחורה מחייכת)
import Image2 from "../../../assets/Images/social.png"; // התמונה הבינונית (נשים צוחקות)
import Image3 from "../../../assets/Images/image-cover2.png"; // התמונה הקטנה (גברים במטבח)
import Logo from "../../../assets/Images/logo-shekel.png"; // לוגו מתנות שק"ל

function CoverSlide() {
  const shape1Ref = useRef(null);
  const [shape1Size, setShape1Size] = useState(0);

  const shape2Ref = useRef(null);
  const [shape2Size, setShape2Size] = useState(0);

  const shape8Ref = useRef(null);
  const [shape8Size, setShape8Size] = useState(0);

  const shape5Ref = useRef(null);
  const [shape5Size, setShape5Size] = useState(0);

  // הוק לחישוב גודל התמונה בצורה דינמית
  useLayoutEffect(() => {
    function updateSize() {
      if (shape1Ref.current) {
        // קבלת המימדים הנוכחיים של המיכל (shape1)
        const { width, height } = shape1Ref.current.getBoundingClientRect();
        // הדרישה: הקוטר יהיה המינימום בין הרוחב לגובה
        const minDimension = Math.min(width, height);
        // נקטין מעט כדי שיהיה מרווח מהגבול (אופציונלי, אפשר להסיר את ה -10)
        setShape1Size(minDimension - 10);
      }
      if (shape2Ref.current) {
        const { width, height } = shape2Ref.current.getBoundingClientRect();
        setShape2Size(Math.min(width, height) - 10);
      }
      if (shape8Ref.current) {
        const { width, height } = shape8Ref.current.getBoundingClientRect();
        // גם כאן נשתמש באותה שיטה - עיגול בגודל המינימלי
        setShape8Size(Math.min(width, height) - 10);
      }
      if (shape5Ref.current) {
        const { width, height } = shape5Ref.current.getBoundingClientRect();
        setShape5Size(Math.min(width, height) - 10);
      }
    }

    // מדידה ראשונית
    updateSize();

    // הוספת מאזין לשינוי גודל מסך
    window.addEventListener("resize", updateSize);

    // ניקוי המאזין כשהקומפוננטה יוצאת
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={styles.slidePage}>
      {/* צורה 1 - צהוב - מכילה את התמונה */}
      <div className={`${styles.shape} ${styles.shape1}`} ref={shape1Ref}>
        {shape1Size > 0 && (
          <img
            src={Image1}
            alt="Cover 1"
            /* כאן אנחנו מוסיפים גם את המחלקה הכללית וגם את זו שמזיזה */
            className={`${styles.centeredCircleImage} ${styles.shifted} ${styles.greenShadowedImage}`}
            style={{ width: shape1Size, height: shape1Size }}
          />
        )}
      </div>

      {/* צורה 2 - ללא הזזה (רק centeredCircleImage) */}
      <div className={`${styles.shape} ${styles.shape2}  `} ref={shape2Ref}>
        {/* בדיקה שחושב הגודל */}
        {shape2Size > 0 && (
          <img
            src={Image2}
            alt="Cover 2"
            className={`${styles.centeredCircleImage} ${styles.purpleShadowedImage}`}
            style={{ width: shape2Size, height: shape2Size }}
          />
        )}
      </div>

      {/* צורה 2 - אדום */}
      <div className={`${styles.shape} ${styles.shape2}`}>
      </div>

      {/* צורה 3 - כחול עליון */}
      <div className={`${styles.shape} ${styles.shape3}`}>
        <h1>שק"ל לאהוב: מחזון חברתי להשפעה כלכלית בת קיימא</h1>
        <h3>תוכניית הצמחיה האסטרטגית לשנת 2026</h3>
      </div>

      {/* צורה 4 - סגול קטן שמאלי */}
      <div className={`${styles.shape} ${styles.shape4}`}>
      </div>

      {/* צורה נוספת (כחול תחתון) - לא מוספרת בתמונה אך קיימת */}
      {/* צורה נוספת (כחול תחתון) - לוגו */}
      {/* צורה נוספת (כחול תחתון) - לוגו */}
      <div className={`${styles.shape} ${styles.shape8}`} ref={shape8Ref}>
        {shape8Size > 0 && (
          <img
            src={Logo}
            alt="Shekel Logo"
            // שינינו כאן ל-logoImage
            className={styles.logoImage}
            style={{ width: shape8Size, height: shape8Size }}
          />
        )}
      </div>

      {/* צורה 5 - ירוק גדול */}
      {/* צורה 5 - ירוק גדול עם תמונה 3 */}
      <div className={`${styles.shape} ${styles.shape5}`} ref={shape5Ref}>
        {shape5Size > 0 && (
          <img
            src={Image3}
            alt="Cover 3"
            // משתמשים במחלקה שעושה עיגול
            className={`${styles.centeredCircleImage} ${styles.bigShadowedImage}`}
            style={{ width: shape5Size, height: shape5Size }}
          />
        )}
      </div>

      {/* צורה 6 - סגול עליון ימני */}
      <div className={`${styles.shape} ${styles.shape6}`}>
      </div>

      {/* צורה 7 - סגול תחתון ימני */}
      <div className={`${styles.shape} ${styles.shape7}`}>
      </div>
    </div>
  );
}

export default CoverSlide;
