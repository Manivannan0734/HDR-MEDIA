'use client'
import styles from '../styles/Couple1.module.css'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import One from '../../assests/one/one.jpg';
import Two from '../../assests/one/two.jpg';
import Three from '../../assests/one/three.jpg';
import Four from '../../assests/one/four.jpg';
import Five from '../../assests/one/five.jpg';
import Six from '../../assests/one/six.jpg';
import Seven from '../../assests/one/seven.jpg';
import Eight from '../../assests/one/eight.jpg';
import Nine from '../../assests/one/nine.jpg';
import Ten from '../../assests/one/ten.jpg';
import Eleven from '../../assests/one/eleven.jpg';
import Twelve from '../../assests/one/twelve.jpg';
import Thirteen from '../../assests/one/thirteen.jpg';
import Fourteen from '../../assests/one/fourteen.jpg';
import Fifteen from '../../assests/one/fifteen.jpg';
import Sixteen from '../../assests/one/sixteen.jpg';
import Seventeen from '../../assests/one/seventeen.jpg';
import Eighteen from '../../assests/one/eighteen.jpg';
import Nineteen from '../../assests/one/nineteen.jpg';
import Twenty from '../../assests/one/twenty.jpg';

const Couple1 = () => {
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

export default Couple1;
