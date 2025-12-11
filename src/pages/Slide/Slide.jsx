// pages/Slide/Slide.jsx
import React from 'react';
import styles from './Slide.module.css';

// ייבוא הבלוקים
import HeaderBlock from '../../components/HeaderBlock/HeaderBlock';
import MainBlock from '../../components/MainBlock/MainBlock';
import SideBlock from '../../components/SideBlock/SideBlock';
import ShadowCard from '../../components/ShadowCard/ShadowCard';

export default function Slide() {
  return (
    <div className={styles.slidePage}>
      
      {/* אזור הכותרת */}
      <div className={styles.headerArea}>
        <HeaderBlock />
      </div>

      {/* אזור הצד */}
      <div className={styles.sideArea}>
        <SideBlock />
      </div>

      {/* האזור הראשי */}
      <div className={styles.mainArea}>
        <MainBlock >
          <ShadowCard />
        </MainBlock>
      </div>

    </div>
  );
}