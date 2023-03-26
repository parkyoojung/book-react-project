import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import "./swiper.css";

import banner from 'assets/img/book.jpg'



function MainSwiper() {
  return (

      <Swiper 
        navigation={true} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation]} 
        className="mySwiper"
      >
        <SwiperSlide className="bg bg1" />
        <SwiperSlide className="bg bg2" />
        <SwiperSlide className="bg bg3" />
        <SwiperSlide className="bg bg4" />
        <SwiperSlide className="bg bg5" />
      </Swiper>
  )
}

export default MainSwiper