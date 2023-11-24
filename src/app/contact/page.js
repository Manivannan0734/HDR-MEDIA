'use client'
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [number,setNumber]=useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleEventDetailsChange = (e) => {
    setEventDetails(e.target.value);
  };

  const handleNumChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = async () => {
    
    try {
      const res = await axios.post('https://hdr-media-default-rtdb.asia-southeast1.firebasedatabase.app/order.json', {
        name,
        occasion,
        date,
        location,
        guests,
        number,
        eventDetails,
      });
      console.log(res);
      console.log('Form submitted!');
      alert("Best Wishes For Your Occasion, Sucessfully Order Placed Our Team Will Contact You Within 24 Hours Thank You...<3")
      preventDefault(e);
      
    } catch (err) {
      alert(err)
    }
  };

  return (
    <div className={styles.back} >
      <Link style={{textDecoration:"none",color:"black"}} href='/' > <FontAwesomeIcon width={15} height={15} icon={faHome} /> Home</Link>
    
      <div>
        <div className={styles.form}>
          <h1 className={styles.h1}>
            May I inquire about the details for your special occasion?
          </h1>
          <h2 className={styles.h2}>What occasion are you planning for?</h2>
          <h2 className={styles.h2}>Please enter your Name</h2>
          <input
           placeholder='eg:Ram'
            className={styles.input}
            type="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <select
            className={styles.select}
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option >select</option>
            <option >Wedding</option>
            <option >Birthday</option>
            <option >Couple Shoot</option>
            <option >Family Photoshoot</option>
            <option >Corporate</option>
            <option >Meternity Photoshoot</option>
            <option >Fashion Model Photoshoot</option>
            <option >New Born Baby Photoshoot</option>
            <option >Product Photoshoot</option>
            <option >Real-Estate Photoshoot</option>
            <option >Others</option>
          </select>
          <h2 className={styles.h2}>When is it?</h2>
          <input
            className={styles.input}
            type="date"
            name="date"
            value={date}
            onChange={handleDateChange}
          />
          <h2 className={styles.h2}>Where is the location?</h2>
          <input
          placeholder='eg:Chennai'
            className={styles.input}
            type="text"
            name="location"
            value={location}
            onChange={handleLocationChange}
          />
          <h2 className={styles.h2}>How many guests are you expecting?</h2>
          <input
          placeholder='eg:500-700'
            className={styles.input}
            type="text"
            name="guests"
            value={guests}
            onChange={handleGuestsChange}
          />
          <h2 className={styles.h2}>Enter Your Phone Number</h2>
          <input
          placeholder='7865438765'
            className={styles.input}
            type="number"
            name="number"
            value={number}
            onChange={handleNumChange}
          />

          <h2 className={styles.h2}>Tell us more about this event?</h2>
          <textarea
            className={styles.textarea}
            rows="5"
            cols=""
            value={eventDetails}
            onChange={handleEventDetailsChange}
          ></textarea>
          <br />
          <button className={styles.button} type="button" onClick={handleSubmit}>
            Click to submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
