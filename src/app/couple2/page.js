'use client'
import styles from '../styles/Couple1.module.css'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import One from '../../assests/two/one.jpg';
import Two from '../../assests/two/two.jpg';
import Three from '../../assests/two/three.jpg';
import Four from '../../assests/two/four.jpg';
import Five from '../../assests/two/five.jpg';
import Six from '../../assests/two/six.jpg';
import Seven from '../../assests/two/seven.jpg';
import Eight from '../../assests/two/eight.jpg';
import Nine from '../../assests/two/nine.jpg';
import Ten from '../../assests/two/ten.jpg';
import Eleven from '../../assests/two/eleven.jpg';
import Twelve from '../../assests/two/twelve.jpg';
import Thirteen from '../../assests/two/thirteen.jpg';
import Fourteen from '../../assests/two/fourteen.jpg';
import Fifteen from '../../assests/two/fifteen.jpg';
import Sixteen from '../../assests/two/sixteen.jpg';
import Seventeen from '../../assests/two/seventeen.jpg';
import Eighteen from '../../assests/two/eighteen.jpg';
import Nineteen from '../../assests/two/nineteen.jpg';
import Twenty from '../../assests/two/twenty.jpg';

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
    if (currentIndex === 19) {
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

        {currentIndex === 6 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Seven}
            alt="loading"
          />
        )}

{currentIndex === 7 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Eight}
            alt="loading"
          />
        )}

        {currentIndex === 8 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Nine}
            alt="loading"
          />
        )}

        {currentIndex === 9 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Ten}
            alt="loading"
          />
        )}

        {currentIndex === 10 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Eleven}
            alt="loading"
          />
        )}

        {currentIndex === 11 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Twelve}
            alt="loading"
          />
        )}

        {currentIndex === 12 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Thirteen}
            alt="loading"
          />
        )}

        {currentIndex === 13 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Fourteen}
            alt="loading"
          />
        )}

        {currentIndex === 14 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Fifteen}
            alt="loading"
          />
        )}

        {currentIndex === 15 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Sixteen}
            alt="loading"
          />
        )}

        {currentIndex === 16 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Seventeen}
            alt="loading"
          />
        )}

        {currentIndex === 17 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Eighteen}
            alt="loading"
          />
        )}

        {currentIndex === 18 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Nineteen}
            alt="loading"
          />
        )}

        {currentIndex === 19 && (
          <Image
            className={styles.img}
            width={600}
            height={600}
            src={Twenty}
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
