"use client";

// LoadingPage.tsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from '../../app/LoadingPage.module.css';

const LoadingPage: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.loadingPage}`,
      { opacity: 1 },
      {
        opacity: 0,
        display: 'none',
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      `.${styles.logoName}`,
      {
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className={styles.loadingPage}>
      <svg
        id="svg"
        version="1.0" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 250"
        className={styles.svg}
        preserveAspectRatio="xMidYMid meet"
      >
          <path d="M157.5 219.5 c-3.8 -2.3 -20 -11.9 -36 -21.2 -15.9 -9.3 -39.2 -23 -51.7 -30.3 -12.6 -7.3 -22.8 -13.6 -22.8 -14 0 -0.9 34.7 -21 36.2 -21 1.2 0 79.5 45.6 81.6 47.5 l1.4 1.3 -0.9 20.9 -0.8 21 -7 -4.2z"/>
          <path d="M334 200.6 l0 -21.3 64 -37.7 c35.2 -20.7 64.2 -37.6 64.5 -37.6 0.3 0 8.8 4.8 19 10.7 l18.5 10.6 -1.7 1.2 c-1 0.7 -11 6.6 -22.3 13.2 -11.3 6.6 -41 24.1 -66 38.8 -71.1 41.9 -73.9 43.5 -75 43.5 l-1 0 0 -21.4z"/>
          <path d="M18.8 137.2 l-18.7 -10.7 0.7 -0.6 c0.6 -0.6 98.5 -58.3 150.8 -88.9 l13.1 -7.7 0.7 21 0.7 21 -1.3 1.2 c-0.7 0.7 -28.7 17.3 -62.3 37 -33.5 19.7 -61.9 36.4 -63 37.1 l-2.1 1.4 -18.6 -10.8z"/>
          <path d="M374.8 95.2 l-40.7 -23.7 -0.1 -21.7 0 -21.8 0.6 0 c0.3 0 8.7 4.8 18.7 10.7 30 17.5 87.7 51.4 94.5 55.3 l6.4 3.7 -14.4 8.3 c-7.8 4.6 -16.1 9.3 -18.4 10.6 -2.2 1.3 -4.5 2.4 -5 2.4 -0.5 0 -19.2 -10.7 -41.6 -23.8z"/>
          <path d="M172 222.5 c0 -0.3 6.2 -11.2 13.8 -24.3 7.6 -13 32.6 -57.1 55.7 -97.9 l42 -74.3 20.8 0 20.7 0 0 1 c0 0.6 -10 18.7 -22.3 40.3 -12.2 21.5 -37.1 65.4 -55.2 97.5 l-33 58.2 -21.2 0 -21.3 0 0 -0.5z"/>
      </svg>

      <div className={styles.nameContainer}>
        <div className={styles.logoName}>JP.DEV</div>
      </div>
    </div>
  );
};

export default LoadingPage;
