import React from "react";
import styles from "./CoverSlide.module.css";
import CircularShadowImage from "../../../components/CircularShadowImage/CircularShadowImage";
// וודא שהנתיבים לתמונות נכונים אצלך בפרויקט
import Image1 from "../../../assets/Images/image.png"; // התמונה הגדולה (מימין - בחורה מחייכת)
import Image2 from "../../../assets/Images/image4.png"; // התמונה הבינונית (נשים צוחקות)
import Image3 from "../../../assets/Images/image5.png"; // התמונה הקטנה (גברים במטבח)
import Logo from "../../../assets/Images/logo-shekel.png"; // לוגו מתנות שק"ל

function CoverSlide() {
  return (
    <div className={styles.slidePage}>
      {/* מיכל שעוטף את כל התמונות כדי שיהיה קל למקם */}
      <div className={styles.leftImagesGroup}>
        {/* תמונה 2: הבינונית (האחורית) */}
        <div className={styles.mediumImageWrapper}>
          <CircularShadowImage
            src={Image2}
            size="100%"
            color="var(--green)" /* מסגרת טורקיז */
            offsetX={0} /* הצללית פונה שמאלה ולמעלה */
            offsetY={0}
            spread={10}
          />
                    <CircularShadowImage
            src={Image2}
            size="100%"
            color="var(--green)" /* מסגרת טורקיז */
            offsetX={0} /* הצללית פונה שמאלה ולמעלה */
            offsetY={0}
            spread={10}
          />
                    <CircularShadowImage
            src={Image2}
            size="100%"
            color="var(--green)" /* מסגרת טורקיז */
            offsetX={0} /* הצללית פונה שמאלה ולמעלה */
            offsetY={0}
            spread={10}
          />
                    <CircularShadowImage
            src={Image2}
            size="100%"
            color="var(--green)" /* מסגרת טורקיז */
            offsetX={0} /* הצללית פונה שמאלה ולמעלה */
            offsetY={0}
            spread={10}
          />
                    <CircularShadowImage
            src={Image2}
            size="100%"
            color="var(--green)" /* מסגרת טורקיז */
            offsetX={0} /* הצללית פונה שמאלה ולמעלה */
            offsetY={0}
            spread={10}
          />
        </div>
        <div className={styles.tempImageGroup}> </div>

        {/* תמונה 3: הקטנה (הקדמית) */}
        <div className={styles.smallImageWrapper}>
          <CircularShadowImage
            src={Image3}
            size="100%"
            color="var(--purple)" /* מסגרת סגולה */
            offsetX={0} /* הצללית פונה שמאלה */
            offsetY={0}
            spread={10}
          />
        </div>
      </div>
      <div className={styles.tempImageGroup}> </div>
    </div>
  );
}

export default CoverSlide;
