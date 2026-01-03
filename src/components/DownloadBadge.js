import React, {useEffect, useState} from 'react';
import styles from './DownloadBadge.module.css';

export default function DownloadBadge() {
  const [downloadsText, setDownloadsText] = useState('120,000+');

  useEffect(() => {
    // Try to fetch generated downloads JSON from static folder
    fetch('/data/downloads.json')
      .then((r) => { if (!r.ok) throw new Error('No downloads file'); return r.json(); })
      .then((d) => {
        if (d && d.formatted) setDownloadsText(d.formatted);
        else if (d && typeof d.downloads === 'number') setDownloadsText(`${d.downloads}`);
      })
      .catch(() => {
        // ignore - fall back to hardcoded
      });
  }, []);

  return (
    <div className={styles.downloadBadge} role="status" aria-live="polite">
      <span className={styles.emoji} aria-hidden="true">🚀</span>
      {downloadsText} Downloads
    </div>
  );
}
