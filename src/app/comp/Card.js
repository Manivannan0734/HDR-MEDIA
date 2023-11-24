'use client'
import {React,useEffect} from 'react'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import One from '../../assests/one.jpg'
import Two from '../../assests/two/fifteen.jpg'
import Three from '../../assests/three/six.jpg'
import Four from '../../assests/four/eight.jpg'
import Five from '../../assests/five/seven.jpg'
import Six from '../../assests/six/sixteen.jpg'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    
    <div  className={styles.h1}  >
       <h1 > See our Album</h1> 
   
    <div className={styles.container} >
        <div data-aos="fade-up" className={styles.card} >
        <Link style={{textDecoration:"none",color:"black"}} href='/couple1' ><h1>MadhavaJothi Swathi</h1></Link>
            
           <Image
            alt='loading'
            src={One}
            className={styles.cardimg}
            />
            
        </div>
    
        <div data-aos="fade-up" className={styles.card}>
        <Link style={{textDecoration:"none", color:"black"}} href='/couple2' ><h1>Vignesh Swathi</h1></Link>
         
            <Image
            alt='loading'
            src={Two}
            className={styles.cardimg}
            /> 
        </div>
        
        <div data-aos="fade-up" className={styles.card}>
        <Link style={{textDecoration:"none",color:"black"}} href='/couple3' ><h1>Praveen Rachana</h1></Link>
        
        <Image
            alt='loading'
            src={Three}
            className={styles.cardimg}
            />
        </div>
        <div data-aos="fade-up" className={styles.card}>
        <Link style={{textDecoration:"none",color:"black"}} href='/couple4' ><h1>Jayanth Mahi</h1></Link>
       
        <Image
            alt='loading'
            src={Four}
            className={styles.cardimg}
            />
        </div>
        <div data-aos="fade-up" className={styles.card}>
        <Link style={{textDecoration:"none",color:"black"}} href='/couple5' ><h1>Sabari Renuka</h1></Link> 
        <Image
            alt='loading'
            src={Five}
            className={styles.cardimg}
            />
              </div>
        <div data-aos="fade-up" className={styles.card}>
        <Link style={{textDecoration:"none",color:"black"}} href='/couple6' ><h1>Anadhan Suriya</h1></Link>
       
        <Image
            alt='loading'
            src={Six}
            className={styles.cardimg}
            
            />
             </div>
        
    </div>
    <div className={styles.sep} >
        <Link className={styles.link} href='/contact' >  <h1> Book Now </h1>  </Link> 
        <Link className={styles.link} href='/about' >  <h1> About Us </h1> </Link>
        <Link className={styles.link} href='/video' >  <h1> Video Gallery </h1>  </Link>
        </div>
    </div>
    
  )
}

export default Card