// components/SideBlock/SideBlock.jsx
import React, { useState } from 'react';
import styles from './SideBlock.module.css';

export default function SideBlock() {
  // משתנה שמחזיק את ה-ID של הכפתור שנבחר כרגע
  const [activeId, setActiveId] = useState(1);

  // רשימת הפריטים בתפריט (במציאות זה יכול להגיע מ-DB או קובץ קונפיגורציה)
  const menuItems = [
    { id: 1, label: 'לוח בקרה', icon: '🏠' },
    { id: 2, label: 'קמפיינים', icon: '📢' },
    { id: 3, label: 'לידים', icon: '👥' },
    { id: 4, label: 'הגדרות', icon: '⚙️' },
  ];

  return (
    <aside className={styles.container}>
      
      {/* אזור עליון - לוגו או כותרת תפריט */}
      <div className={styles.topSection}>
        <h3 className={styles.menuTitle}>תפריט</h3>
      </div>

      {/* רשימת הכפתורים */}
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            // אם הכפתור הזה הוא הפעיל, נוסיף לו קלאס מיוחד
            className={`${styles.menuItem} ${activeId === item.id ? styles.active : ''}`}
            onClick={() => setActiveId(item.id)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* אזור תחתון - פרופיל משתמש */}
      <div className={styles.userSection}>
        <div className={styles.avatar}>E</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>עדן</span>
          <span className={styles.userRole}>מנהל מערכת</span>
        </div>
      </div>

    </aside>
  );
}