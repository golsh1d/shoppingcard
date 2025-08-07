import React from 'react'
import './ProductWrapperBottSec.css'

import ProductCard from '../ProductCard/ProductCard'
import RightPagination from '../RightPagination/RightPagination'
import LeftPagination from '../LeftPagination/LeftPagination'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

import { useRef } from 'react'


export default function ProductWrapperBottSec() {

  let swiperRef = useRef(null)

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }  

  return (
    <>
    <div className='ProductWrapperBottSec-container'>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        spaceBetween={4}
        breakpoints={{
          0 : {
            slidesPerView : 2,
          }, 
          768 : {
            slidesPerView : 3,
          } ,
          1280 : {
            slidesPerView : 4,
          }
        }}
        loop={true}
      >
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>

      </Swiper>
    </div>

    <div className='ProductWrapperBottSec-button-container'>
        <div className='ProductWrapperBottSec-icon-wrapper'>
             <LeftPagination onLeft={handlePrev}/>
             <RightPagination onRight={handleNext}/>
        </div>
    </div>
    </>
  )
}
