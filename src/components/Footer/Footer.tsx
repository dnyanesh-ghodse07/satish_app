import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact'>
        <h4>Contacts :</h4>
        <div className='contacts'>
          <div className='contact-item'>
            <p>Sanjay More</p>
            <h4>9823124512</h4>
          </div>
          <div className='contact-item'>
            <p>Satish More</p>
            <h4>8055420106</h4>
          </div>
          <div className='contact-item'>
            <p>Arjun More</p>
            <h4>9309357101</h4>
          </div>
        </div>
      </div>
      <div className="address">
        <h4>Address :</h4>
        <p>Mujampeth/Dhanegaon, Navghat Road, New Nanded, 431603</p>
      </div>
    </div>
  )
}

export default Footer