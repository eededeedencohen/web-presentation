// components/HeaderBlock/HeaderBlock.jsx
import React from 'react';
import styles from './HeaderBlock.module.css';
import Title from '../Title/Title';

export default function HeaderBlock() {
  return (
    <div className={styles.container}>
      <Title text="החזון המנחה אותנו:" className={styles.title} />
    </div>
  );
}