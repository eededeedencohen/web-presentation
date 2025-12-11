// components/MainBlock/MainBlock.jsx
import styles from './MainBlock.module.css';

export default function MainBlock({ children }) {
  return (
    <div className={styles.container}> {/* אותו שם קלאס, אין התנגשות! */}
      {children}
    </div>
  );
}