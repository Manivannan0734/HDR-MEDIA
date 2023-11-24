'use client'
import {React,useEffect} from 'react';
import Image from 'next/image';
import styles from '../styles/Grid.module.css'
import One from '../../assests/grid/one.jpg'
import Two from '../../assests/grid/two.jpg'
import Three from '../../assests/grid/three.jpg'
import Four from '../../assests/grid/four.jpg'
import Five from '../../assests/grid/five.jpg'
import Six from '../../assests/grid/six.jpg'
import Seven from '../../assests/grid/seven.jpg'
import Eight from '../../assests/grid/eight.jpg'
import Nine from '../../assests/grid/nine.jpg'
import Ten from '../../assests/grid/ten.jpg'

import Twelve from '../../assests/grid/twelve.jpg'
import Thirteen from '../../assests/grid/thirteen.jpg'
import Fourteen from '../../assests/grid/fourteen.jpg'
import Fifteen from '../../assests/one/fifteen.jpg'
import Sixteen from '../../assests/six/sixteen.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Grid = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
  <div>
    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150" >
        <div className={styles.imgC} >
            <Image className={styles.hor} src={One} alt='loading' />
            <Image className={styles.hor} src={Two} alt='loading' />
            <Image className={styles.hor} src={Eight} alt='loading' />
        </div>
        <div className={styles.imgC}>
            <Image className={styles.hor} src={Four} alt='loading' />
            <Image className={styles.hor} src={Five} alt='loading' />
            <Image className={styles.hor} src={Six} alt='loading' />
        </div>
        <div className={styles.imgC}>
            <Image className={styles.por} src={Seven} alt='loading' />
            <Image className={styles.por} src={Three} alt='loading' />
            <Image className={styles.por} src={Nine} alt='loading' />
           
            
        </div>
        <div className={styles.imgC}>
        <Image className={styles.hor} src={Thirteen} alt='loading' />
            <Image className={styles.hor} src={Fourteen} alt='loading' />
            <Image className={styles.hor} src={Ten} alt='loading' />
            <Image className={styles.hor} src={Twelve} alt='loading' />
            <Image className={styles.hor} src={Fifteen} alt='loading' />
            <Image className={styles.hor} src={Sixteen} alt='loading' />
        </div>

        
     
    </div>
  </div>
  );
};

export default Grid;
