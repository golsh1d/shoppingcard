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
    {id : 1 , category : "bag" , title : "Arkatella" , img : "./imgs/bag1.jpg" , rate : "4.5" , price : "1000" , des : `A chic everyday bag with a minimalist design. Perfect for casual outings, this bag holds all your essentials in style.A chic everyday bag with a minimalist design. Perfect for casual outings, this bag holds all your essentials in style.`} ,
    {id : 2 , category : "bag" , title : "Arko" , img : "./imgs/bag2.jpg" , rate : "4" , price : "2000" , des : `Elegant and compact, this handbag adds a classy touch to any outfit. Ideal for dinners, dates, or a night out with friends.Elegant and compact, this handbag adds a classy touch to any outfit. Ideal for dinners, dates, or a night out with friends.`} ,
    {id : 3 , category : "bag" , title : "Karina" , img : "./imgs/bag3.jpg" , rate : "5" , price : "3000" , des : `Spacious and sturdy, this tote is made for busy days. Great for work, shopping, or carrying your daily must-haves.Spacious and sturdy, this tote is made for busy days. Great for work, shopping, or carrying your daily must-haves.`} ,
    {id : 4 , category : "bag" , title : "Roset" , img : "./imgs/bag4.jpg" , rate : "3.5" , price : "800" , des : `A sleek crossbody with a modern edge. Lightweight, practical, and ideal for hands-free convenience. A sleek crossbody with a modern edge. Lightweight, practical, and ideal for hands-free convenience`} ,
    {id : 5 , category : "bag" , title : "Felisita" , img : "./imgs/bag5.jpg" , rate : "3" , price : "400" , des : `A vintage-inspired bag with unique textures and charm. It’s a timeless piece that stands out in any wardrobe. A vintage-inspired bag with unique textures and charm. It’s a timeless piece that stands out in any wardrobe.`} ,
    {id : 6 , category : "bag" , title : "Dona" , img : "./imgs/bag6.jpg" , rate : "2" , price : "3000" , des : `This sporty backpack blends comfort with style. Perfect for school, travel, or weekend adventures. This sporty backpack blends comfort with style. Perfect for school, travel, or weekend adventures.`} ,
    {id : 7 , category : "bag" , title : "Daily" , img : "./imgs/bag7.jpg" , rate : "4.9" , price : "4500" , des : `Soft and slouchy, this hobo bag is all about relaxed elegance. Roomy enough for daily use, yet effortlessly stylish. Soft and slouchy, this hobo bag is all about relaxed elegance. Roomy enough for daily use, yet effortlessly stylish.`} ,
    {id : 8 , category : "bag" , title : "Canvas" , img : "./imgs/bag8.jpg" , rate : "5" , price : "6000" , des : `Bold and eye-catching, this statement bag turns heads wherever you go. Made for those who love to express their personality through fashion. Bold and eye-catching, this statement bag turns heads wherever you go. Made for those who love to express their personality through fashion.`} ,
    {id : 9 , category : "shoe" , title : "Anakarla" , img : "./imgs/shoe1.jpg" , rate : "4.9" , price : "600" , des : `Step into elegance with these classic heels.Perfect for formal events, they add height and sophistication to any outfit. Step into elegance with these classic heels.Perfect for formal events, they add height and sophistication to any outfit.`} ,
    {id : 10 , category : "shoe" , title : "Arcane" , img : "./imgs/shoe2.jpg" , rate : "3.5" , price : "400" , des : `Chic and comfortable, these ballet flats are made for all-day wear.Their sleek design pairs effortlessly with both jeans and dresses. Chic and comfortable, these ballet flats are made for all-day wear.Their sleek design pairs effortlessly with both jeans and dresses.`} ,
    {id : 11 , category : "shoe" , title : "Memento" , img : "./imgs/shoe3.jpg" , rate : "3.6" , price : "500" , des : `Make a bold statement with these vibrant sneakers.Designed for comfort and style, they’re perfect for on-the-go days. Make a bold statement with these vibrant sneakers.Designed for comfort and style, they’re perfect for on-the-go days.`} ,
    {id : 12 , category : "shoe" , title : "Karlla" , img : "./imgs/shoe4.jpg" , rate : "4" , price : "650" , des : `These strappy sandals are summer essentials.Lightweight, breathable, and ideal for beach days or city strolls. These strappy sandals are summer essentials.Lightweight, breathable, and ideal for beach days or city strolls.`} ,
    {id : 13 , category : "shoe" , title : "Sansa" , img : "./imgs/shoe5.jpg" , rate : "3" , price : "1000" , des : `Ankle boots with attitude — stylish, sturdy, and versatile.Dress them up or down, rain or shine. Ankle boots with attitude — stylish, sturdy, and versatile.Dress them up or down, rain or shine.`} ,
    {id : 14 , category : "shoe" , title : "Arya" , img : "./imgs/shoe6.jpg" , rate : "5" , price : "2000" , des : `These wedge heels combine height with comfort.Perfect for brunch, garden parties, or everyday chic. These wedge heels combine height with comfort.Perfect for brunch, garden parties, or everyday chic.`} ,
    {id : 15 , category : "shoe" , title : "Catella" , img : "./imgs/shoe7.jpg" , rate : "3.8" , price : "400" , des : `Soft suede loafers that bring effortless elegance to your casual looks.Slip them on for instant style and ease. Soft suede loafers that bring effortless elegance to your casual looks.Slip them on for instant style and ease.`} ,
    {id : 16 , category : "shoe" , title : "Petra" , img : "./imgs/shoe8.jpg" , rate : "2.9" , price : "300" , des : `Glamorous evening shoes with a touch of sparkle.Perfect for weddings, parties, or any special night out. Glamorous evening shoes with a touch of sparkle.Perfect for weddings, parties, or any special night out.`} ,
    {id : 17 , category : "shoe" , title : "Daenera" , img : "./imgs/shoe9.jpg" , rate : "4" , price : "1000" , des : `These combat boots are tough, trendy, and built to last.Pair them with jeans or dresses for an edgy twist These combat boots are tough, trendy, and built to last.Pair them with jeans or dresses for an edgy twist..`} ,
    {id : 18 , category : "shoe" , title : "Amanda" , img : "./imgs/shoe10.jpg" , rate : "4.5" , price : "1100" , des : `Lightweight running shoes designed for both performance and style.Ideal for workouts, errands, or athleisure looks. Lightweight running shoes designed for both performance and style.Ideal for workouts, errands, or athleisure looks.`} ,
    {id : 19 , category : "shoe" , title : "Rachel" , img : "./imgs/shoe11.jpg" , rate : "5" , price : "700" , des : `These mules are the definition of effortless style.Just slip them on and go — chic, easy, and always in trend.These mules are the definition of effortless style.Just slip them on and go — chic, easy, and always in trend.`} ,
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
            slidesPerView : 1,
          }, 
          500 : {
            slidesPerView : 2,
          } ,
          768 : {
            slidesPerView : 1,
          } ,
          998 : {
            slidesPerView : 2,
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
