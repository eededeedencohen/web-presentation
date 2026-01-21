import React from "react";
import styles from "./SlideModalContent.module.css";

// רכיב עזר להודעת הלחיצה
const ClickHint = () => (
  <div className={styles.clickHint}>לחץ כאן לצפייה בפרק המלא במסמך &larr;</div>
);

// רכיב Source Box לניווט למסמך
export const SourceBox = ({
  document,
  location,
  details,
  onNavigate,
  slideId,
  sectionId,
}) => {
  const handleClick = () => {
    if (onNavigate && slideId) {
      onNavigate(slideId, sectionId);
    }
  };

  return (
    <div
      className={styles.sourceBox}
      onClick={handleClick}
      style={{ cursor: onNavigate ? "pointer" : "default" }}
    >
      {document && (
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מסמך:</span>
          <span className={styles.sourceValue}>{document}</span>
        </div>
      )}
      {location && (
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>מיקום:</span>
          <span className={styles.sourceValue}>{location}</span>
        </div>
      )}
      {details && (
        <div className={styles.sourceRow}>
          <span className={styles.sourceLabel}>פירוט:</span>
          <span className={styles.sourceValue}>{details}</span>
        </div>
      )}
      {onNavigate && <ClickHint />}
    </div>
  );
};

// רכיב Container כללי
export const SlideModalContainer = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

// רכיב טקסט פשוט
export const ModalText = ({ children, className = "" }) => {
  return <p className={`${styles.text} ${className}`}>{children}</p>;
};

// רכיב סעיף
export const ModalSection = ({ title, children }) => {
  return (
    <div className={styles.section}>
      {title && <h3 className={styles.sectionTitle}>{title}</h3>}
      {children}
    </div>
  );
};

// רכיב רשימה
export const ModalList = ({ items, ordered = false }) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          {item}
        </li>
      ))}
    </Tag>
  );
};

// ברירת מחדל - ייצוא כל הרכיבים
export default {
  Container: SlideModalContainer,
  Text: ModalText,
  Section: ModalSection,
  List: ModalList,
  SourceBox: SourceBox,
};
