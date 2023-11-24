import React from 'react'
import Image from 'next/image'
import Logo from '../../assests/logo.png'
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div>
      <div>
        <div className={styles.container} >
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>
        <h1 className={styles.heading} >Story Telling Through The Power Of Photography</h1> 
      </div>
    </div>
  )
}

export default Header