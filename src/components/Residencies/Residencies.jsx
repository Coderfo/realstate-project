import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import './Residencies.css'
import data from '../../assets/utils/slider.json'
import { sliderSettings } from '../../assets/utils/common'
const Residencies = () => {

  
  return (
  
   <section className="r-wrapper">
    <div className="padding innerWidth r-container">
      <div className="r-head flexColStart">
        <span className='orangeText'>Best Choices</span>
        <span className='primaryText'>Popular Residencies</span>
      </div>


      <Swiper {...sliderSettings} >
        <SliderButtons/>

        {
          data.map((card, i) => (
            <SwiperSlide key = {i}>
              <div className='flexColStart r-card'>
                <img srcSet={card.image} alt='Home'/>

                <span className='secondaryText r-price'>
                  <br />
                  <span style={{color: "orange"}}>$</span><span>{card.price}</span>

                </span>

                <span className='primaryText'>{card.name}</span>
                <span className='SecondaryText'>{card.details}</span>



              </div>

            
            </SwiperSlide>
          )
        )

        }
      
      </Swiper>
      
    </div>
   </section>
  )
}

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (

    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>


  )
    
  }
