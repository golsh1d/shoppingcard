import React, { useEffect } from 'react'
import './ProductWrapperBottSec.css'

import ProductCard from '../ProductCard/ProductCard'
import RightPagination from '../RightPagination/RightPagination'
import LeftPagination from '../LeftPagination/LeftPagination'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

import { useRef , useState } from 'react'


export default function ProductWrapperBottSec() {
  const [allProductsInfo , setAllProductsInfo] = useState([
    {id : 1 , category : "bag" , title : "Arkatella" , img : "./imgs/bag1.webp" , rate : "4.5" , price : "1000" , des : `A chic everyday bag with a minimalist design. Perfect for casual outings, this bag holds all your essentials in style.`} ,
    {id : 2 , category : "bag" , title : "Arko" , img : "./imgs/bag2.webp" , rate : "4" , price : "2000" , des : `Elegant and compact, this handbag adds a classy touch to any outfit. Ideal for dinners, dates, or a night out with friends.`} ,
    {id : 3 , category : "bag" , title : "Karina" , img : "./imgs/bag3.webp" , rate : "5" , price : "3000" , des : `Spacious and sturdy, this tote is made for busy days. Great for work, shopping, or carrying your daily must-haves.`} ,
    {id : 4 , category : "bag" , title : "Roset" , img : "./imgs/bag4.webp" , rate : "3.5" , price : "800" , des : `A sleek crossbody with a modern edge. Lightweight, practical, and ideal for hands-free convenience.`} ,
    {id : 5 , category : "bag" , title : "Felisita" , img : "./imgs/bag5.webp" , rate : "3" , price : "400" , des : `A vintage-inspired bag with unique textures and charm. It’s a timeless piece that stands out in any wardrobe.`} ,
    {id : 6 , category : "bag" , title : "Dona" , img : "./imgs/bag6.webp" , rate : "2" , price : "3000" , des : `This sporty backpack blends comfort with style. Perfect for school, travel, or weekend adventures.`} ,
    {id : 7 , category : "bag" , title : "Daily" , img : "./imgs/bag7.webp" , rate : "4.9" , price : "4500" , des : `Soft and slouchy, this hobo bag is all about relaxed elegance. Roomy enough for daily use, yet effortlessly stylish.`} ,
    {id : 8 , category : "bag" , title : "Canvas" , img : "./imgs/bag8.webp" , rate : "5" , price : "6000" , des : `Bold and eye-catching, this statement bag turns heads wherever you go. Made for those who love to express their personality through fashion.`} ,
  ])
  const[finalProductsInfo , setFinalProductsInfo] = useState([])

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

  useEffect(() => {
    setFinalProductsInfo(allProductsInfo)
  } , [])

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

      {finalProductsInfo.map(obj => (
        <SwiperSlide>
          <ProductCard {...obj} key={obj.id}/>
        </SwiperSlide>
      ))}

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
