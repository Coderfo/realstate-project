import React from 'react';
import './Hero.css';
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import { HiLocationMarker } from 'react-icons/hi';


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">

        <div className="flexColStart hero-left">
            <div className='hero-title'>
              <div className="orange-circle"/>
                <motion.h1
                initial={{y: '2rem', opacity: 0}}
                animate ={{y: 0, opacity: 1}}
                transition={{duration: 2, type: 'spring'}}>
                Discover <br /> Most Suitable <br />Property
                </motion.h1>
            </div>

            <div className="flexColStart hero-description">

              <span className='secondaryText'>Find the variety of properties that suit your expectations. </span>
              <span className='secondaryText' >Forget all difficulties in finding the right home. </span>
            </div>


              <div className="flexCenter search-bar">
                <HiLocationMarker color='var(--blue)' size={25}/>
                <input type="text" />
                <button className='button'>Search</button>

              </div>

              <div className="flexCenter stats">
                      <div className="flexColCenter stat">
                        <span>
                          <CountUp start = {8800} end = {9000} duration={4} />
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                      </div>
                      <div className="flexColCenter stat">
                        <span>
                          <CountUp start = {1950} end = {2000} duration={4} />
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                      </div>
                      <div className="flexColCenter stat">
                        <span>
                          <CountUp  end = {28} />
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>
                      </div> 
                </div>
        </div>

                

              {/*Right side */}

              <div className="flexCenter hero-right">

              <motion.div
                  
                  initial= {{x: "7rem", opacity: 0}}
                  animate= {{x: 0, opacity: 1}}
                  transition={{duration: 2, type: 'spring'}}>
                    <div className="image-container">
                    <img src="https://images.surferseo.art/fdb08e2e-5d39-402c-ad0c-8a3293301d9e.png"  />
                    
                  </div>
              </motion.div>

              </div>

            
      </div>
      
    </section>
  )
}

export default Hero