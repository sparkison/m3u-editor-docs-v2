import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './ScreenshotsCarousel.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import screenshots from '../data/screenshots';

export default function ScreenshotsCarousel() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });
  const [visibleScreenshots, setVisibleScreenshots] = useState(screenshots || []);
  const baseUrl = useBaseUrl('');

  useEffect(() => {
    setVisibleScreenshots(screenshots || []);
  }, [screenshots]);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });

  const handleImageError = (src) => {
    setVisibleScreenshots((prev) => prev.filter((s) => s.src !== src));
  };

  return (
    <>
      {visibleScreenshots.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: 32 }}
          className={styles.carousel}
        >
          {visibleScreenshots.map((img) => {
            const src = `${baseUrl.replace(/\/$/, '')}${img.src}`;
            return (
              <SwiperSlide key={src}>
                <img
                  src={src}
                  alt={img.alt}
                  className={styles.screenshotImg}
                  onError={() => handleImageError(img.src)}
                  onClick={() => openLightbox(src, img.alt)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Expand ${img.alt}`}
                  onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(src, img.alt); }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#cbd5e1' }}>No screenshots available.</div>
      )}
      {lightbox.open && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">&times;</button>
          <img src={lightbox.src} alt={lightbox.alt} className={styles.lightboxImg} />
        </div>
      )}
    </>
  );
}
