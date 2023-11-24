'use client'
import styles from '../styles/Couple1.module.css'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import One from '../../assests/three/one.jpg';
import Two from '../../assests/three/two.jpg';
import Three from '../../assests/three/three.jpg';
import Four from '../../assests/three/four.jpg';
import Five from '../../assests/three/five.jpg';
import Six from '../../assests/three/six.jpg';


const Couple2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(19);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === 5) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleExitClick = () => {
    // Implement exit functionality here
  };

  return (
    <div className={styles.container}>
      <Link style={{ textDecoration: 'none', color: 'black' }} href="/">
        <FontAwesomeIcon width={15} height={15} icon={faHome} /> Home
      </Link>

      <div className={styles.imageContainer}>
        {currentIndex === 0 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={One}
            alt="loading"
          />
        )}

        {currentIndex === 1 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Two}
            alt="loading"
          />
        )}

        {currentIndex === 2 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Three}
            alt="loading"
          />
        )}

        {currentIndex === 3 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Four}
            alt="loading"
          />
        )}

        {currentIndex === 4 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Five}
            alt="loading"
          />
        )}

        {currentIndex === 5 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Six}
            alt="loading"
          />
        )}

       

      </div>
      <div  className={styles.navigation}>
          <div >
          <button onClick={handlePreviousClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={handleNextClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </div>
        </div>
    </div>

  );
};

export default Couple2;
