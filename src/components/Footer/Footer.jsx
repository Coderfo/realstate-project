import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className="paddings innerWidth flexCenter f-container">


        {/* left section */}
        <div className="flexColStart f-left">
          <img src="./logos/real-state-logo.jpg"
          alt="logo" width={120} />
          <span className='secondaryText'>
            Our vision is to ake all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className='primaryText'>
            INFORMATION
          </span>
          <span className='secondaryText'>
            1235 CherryGlade Ln, Houston, Tx
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer