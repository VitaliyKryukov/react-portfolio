import React from 'react';
import './feedback.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
   {
      avatar: AVTR1,
      name: 'Anastasia Voronova',
      review: "Many thanks to Vitaly Kryukov for help in developing a web application"
   },
   {
      avatar: AVTR2,
      name: 'Kirill Dydikin',
      review: "Thanks a lot to Vitaly Kryukov for cooperation, it's a pleasure to work with such people"
   },
   {
      avatar: AVTR3,
      name: 'Dmytriy Sherbakov',
      review: "TThank you for your help in developing a web application, for explaining the nuances and just a good human attitude."
   },
   {
      avatar: AVTR4,
      name: 'Darya Kopytina',
      review: "I am glad to cooperate, thank you for the quality work done in a short time"
   }
]

const Testimonials = () => {
   return (
      <section id='feedback'>
         <h5>Review from clients</h5>
         <h2>Feedback</h2>

         <Swiper className="container feedback__container"
               modules={[ Pagination]}
               spaceBetween={40}
               slidesPerView={1}
               pagination={{ clickable: true }}>
             
            {
               data.map(({ avatar, name, review }, index) => {
                  return (
                     <SwiperSlide key={index} className='feedback'>
                        <div className="client__avatar">
                           <img src={avatar} alt='' />
                           </div>
                           <h5 className='client__name'>{name}</h5>
                           <small className='client__review'>{review}</small>
                      
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </section>
   )
}

export default Testimonials;
