import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    // אם הלחיצה היא בדיוק על ה-Overlay (ולא על החלון הלבן שבתוכו)
    if (event.target === event.currentTarget) {
      event.stopPropagation(); // <--- שורה קריטית! מונע מהלחיצה להגיע ל-CoverSlide
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      {/* הוספנו stopPropagation גם לחלון עצמו כדי שלחיצה בתוך המודל לא תסגור/תפתח אותו */}
      <div className={styles.modalWindow}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
