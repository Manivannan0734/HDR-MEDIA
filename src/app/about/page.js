'use client'
import {React,useEffect} from 'react'
import styles from '../styles/About.module.css'
import Logo from '../../assests/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    
    <div  className={styles.back}>
      <Link style={{textDecoration:"none",color:"black"}} href='/' > <FontAwesomeIcon width={15} height={15} icon={faHome} /> Home</Link>
    
    <div className={styles.container} >
     
    <div data-aos="fade-up"  className={styles.content} >
        <h1>About Us </h1>
<span style={{color:"black"}} >HDR Media</span> Welcome to HDR Media - Capturing Moments, Creating Memories
At HDR Media, we believe that every moment is a story waiting to be told, and every image has the power to convey emotions that last a lifetime. We are passionate about capturing the essence of your special moments through the artistry of photography.

<h1>Our Story</h1>
Founded with a vision to redefine visual storytelling, HDR Media brings together a team of dedicated and creative photographers committed to delivering exceptional imagery. With a deep appreciation for the beauty that surrounds us, we specialize in High Dynamic Range (HDR) photography, pushing the boundaries to capture the world in vivid detail and vibrant colors.

 <h1> Our Approach</h1>
What sets us apart is our commitment to not just taking photographs, but crafting visual narratives that resonate with our clients. We understand that each event, person, or place has its own unique story, and we strive to reflect that individuality in every shot. Our photographers blend technical expertise with an artistic eye, ensuring that each image is a work of art in itself.

<h1>Our Services</h1>
Whether it is a wedding, a family portrait, a corporate event, or a commercial project, HDR Media is dedicated to providing photography services that exceed expectations. We offer a range of packages tailored to suit your specific needs, ensuring that you receive the perfect blend of creativity, professionalism, and affordability.

<h1>Meet the Team</h1>
Behind HDR Media is a team of skilled photographers who are not just passionate about their craft but also deeply committed to customer satisfaction. Our photographers bring a diverse range of experiences and perspectives, allowing us to approach each project with fresh eyes and innovative ideas.

<h1>Why Choose HDR Media?</h1>
Innovation: We embrace cutting-edge technology and techniques, including HDR photography, to bring a unique and modern touch to your images.

<h2>Customer-Centric</h2> Your satisfaction is our priority. We work closely with clients to understand their vision and bring it to life through our lens.

<h2>Quality Assurance</h2> From the moment we capture an image to the final delivery, we maintain the highest standards of quality in every aspect of our work.

<h2>Passion for Excellence</h2> We are driven by a passion for excellence in photography. This commitment is reflected in every image we create.
<br/>

Thank you for considering HDR Media as your photography partner.
<br/>
<br/>

<h2>Capturing Moments, Creating Memories.</h2>
    </div>
    </div>
    <div className={styles.img}>
      <Image
      
      alt='loading'
      src={Logo}
      width={300}
      height={300}
      />
    </div>
    </div>
  )
}

export default page