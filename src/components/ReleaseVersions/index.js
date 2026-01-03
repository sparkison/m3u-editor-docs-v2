import React from 'react';
import styles from './styles.module.css';

const RELEASE_VERSIONS = [
  {
    type: 'Production',
    version: 'v0.8.19',
    description: 'Stable, production-ready release with all tested features',
    status: 'stable',
    downloadUrl: 'https://github.com/sparkison/m3u-editor/releases/latest',
    color: 'var(--ifm-color-primary)'
  },
  {
    type: 'Development',
    version: 'v0.8.26-dev',
    description: 'Latest development build with new features and improvements',
    status: 'beta',
    downloadUrl: 'https://github.com/sparkison/m3u-editor/releases',
    color: '#fbbf24'
  },
  {
    type: 'Experimental',
    version: 'v0.8.27-exp',
    description: 'Cutting-edge experimental features (use with caution) -- There be dragons!',
    status: 'experimental',
    downloadUrl: 'https://github.com/sparkison/m3u-editor/releases',
    color: '#f87171'
  }
];

export default function ReleaseVersions() {
  return (
    <div className={styles.versionsContainer}>
      <h2>Latest Releases</h2>
      <div className={styles.versionsGrid}>
        {RELEASE_VERSIONS.map((release) => (
          <div key={release.type} className={styles.versionCard}>
            <div className={styles.versionHeader}>
              <h3 style={{ color: release.color }}>{release.type}</h3>
              <span className={`${styles.status} ${styles[release.status]}`}>
                {release.status}
              </span>
            </div>
            <div className={styles.versionNumber}>
              {release.version}
            </div>
            <p className={styles.description}>
              {release.description}
            </p>
            <a
              href={release.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
            >
              Download →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}