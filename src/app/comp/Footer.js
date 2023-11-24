

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Logo from '../../assests/logo.png'
const Footer = () => {
  return (
    <footer className={styles.container}>
        <Image className={styles.img}
        src={Logo}
        alt='loading'
        />
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/hdr_media_/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a href="mailto:manivannan0734@gmail.com">
          <FontAwesomeIcon icon="envelope" className={styles.icon} />
        </a>
       
      </div>
      <h3>Storytelling Through the
Power of Photography</h3>
      
    </footer>
  );
};

export default Footer;