import React from 'react';
import styles from './styles.module.css';

// You can update this number or fetch dynamically if needed
const DOWNLOADS = '120,000+';

// Removed, replaced by CornerStat design in hero
return (
    <div className={styles.statContainer}>
        <span className={styles.emoji} aria-hidden="true">🚀</span>
        <span className={styles.number}>{DOWNLOADS}</span>
        <span className={styles.label}>Downloads</span>
    </div>
);
}
