'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Backend.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
const Admin = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'hdr' && password === '111') {
      setAuthenticated(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleDelete = (index) => {
  
    axios.delete(`https://hdr-media-default-rtdb.asia-southeast1.firebasedatabase.app/order/${index}.json`)
      .then(res => {
       
        console.log(`Successfully deleted item at index: ${index}`);
        
        setData(prevData => prevData.filter((item, i) => i !== index));
      })
      .catch(err => {
        
        console.log(`Error deleting item at index: ${index}`, err);
      });
  };


  useEffect(() => {
    if (authenticated) {
      axios.get('https://hdr-media-default-rtdb.asia-southeast1.firebasedatabase.app/order.json')
        .then(res => {
          const newArr = Object.keys(res.data).map(el => {
            return res.data[el];
          });
          console.log(newArr);
          setData(newArr);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className={styles.container}>

      <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
</div>

    );
  }

  return (
    <div> 
      <h1 className={styles.heading} > <FontAwesomeIcon icon={faCamera} /> HDR media Admin Panel</h1>
   
    <div className={styles.container}>
         
        {data.map((el,i) => {
        return (
          <div className={styles.card} key={i}>
      
            <h1>Client Name: {el.name}</h1>
            <h1>Contact Number: {el.number}</h1>
            <h1>Occasion: {el.occasion}</h1>
            <p>Date: {el.date}</p>
            <p>Location: {el.location}</p>
            <p>Number Of Guests: {el.guests}</p>
            <p>Details About Event: {el.eventDetails}</p>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Admin;