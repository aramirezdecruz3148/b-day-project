import React from 'react';
import Adventure from './adventure/Adventure';
import styles from './adventure/Adventure.css';

export default function App() {
  return (
    <div className={styles.pageWrapper}>
      <Adventure />
    </div>
  );
}
