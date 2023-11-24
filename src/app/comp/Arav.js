import React from 'react'
import Image from 'next/image'
import Aravpic from '../../assests/intro.png'
import styles from '../styles/Arav.module.css'
export const Arav = () => {
  return (
    <div className={styles.container}>
        <div>
            <Image
            alt='loading'
            src={Aravpic}
            className={styles.img}
            /> 
             </div>
             <h1 className={styles.heading}>Storytelling Through the <br/> <span style={{color:"#79946f"}} >Power of  Photography</span></h1>
             

    </div>
  )
}
