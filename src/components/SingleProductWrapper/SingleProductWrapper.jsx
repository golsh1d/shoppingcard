import React, { useRef } from 'react'
import './SingleProductWrapper.css'
import { useEffect , useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function SingleProductWrapper() {
  let singleProductWrapper = useRef()
  let dollarIcon = useRef()
  let productRef = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        singleProductWrapper.current.classList.add("SingleProductWrapper-dark");
        dollarIcon.current.classList.add("SingleProductWrapper-dollar-icon-dark");
        productRef.current.classList.add("SingleProductWrapper-des-dark");
    } else {
        singleProductWrapper.current.classList.remove("SingleProductWrapper-dark");
        dollarIcon.current.classList.remove("SingleProductWrapper-dollar-icon-dark");
        productRef.current.classList.remove("SingleProductWrapper-des-dark");
  }}  

  useEffect(() => {
    const handleStorageUpdate = () => {
    getLocalStorage();
    };
    
    getLocalStorage();
    
    window.addEventListener("lsUpdated", handleStorageUpdate);
    
    return () => {
    window.removeEventListener("lsUpdated", handleStorageUpdate);
    };
  }, []); 

  return (
    <section className='SingleProductWrapper' ref={singleProductWrapper}>
      <div className='SingleProductWrapper-product-info'>
        <div className='SingleProductWrapper-left-section'>
          <div className='SingleProductWrapper-head'>
            <div className='SingleProductWrapper-title'>Arko</div>
            <div className='SingleProductWrapper-rate'>
              <span className='SingleProductWrapper-rate-span'>5</span>
              <StarRoundedIcon className='SingleProductWrapper-rate-icon'/>
            </div>
          </div>
          <div className='SingleProductWrapper-des' ref={productRef}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias cum ducimus vero impedit voluptatibus asperiores alias inventore? Minima odit fugiat consectetur ex eos earum, sequi in illum maxime itaque officiis exercitationem ut aliquid reiciendis dolorum dolorem, sapiente quos reprehenderit soluta, molestias ducimus nisi quasi vero. Saepe alias tempora exercitationem dolorum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur dicta cupiditate aliquam rem dolor unde amet porro repellat commodi suscipit eveniet, a libero, reiciendis deserunt magnam voluptate assumenda. Ut.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi expedita cupiditate tempora dolor inventore error commodi quisquam unde! Quos, veniam laborum. Aliquam eaque, deserunt temporibus a hic nemo soluta ipsum accusantium alias at adipisci iste magnam itaque laudantium. Nam aut id minima architecto a quae, corporis ut accusantium vero.
          </div>
          <div className='SingleProductWrapper-price'>
            <span className='SingleProductWrapper-price-span'>1000</span>
            <MonetizationOnRoundedIcon className='SingleProductWrapper-dollar-icon' ref={dollarIcon}/>
          </div>
          <button className='SingleProductWrapper-btn'>Add to card</button>
        </div>
        <div className='SingleProductWrapper-right-section'>
          <div className='SingleProductWrapper-img-wrapper'>
            <img src="../imgs/bag1.jpg" alt="productImg" className='SingleProductWrapper-img'/>
          </div>
        </div>
      </div>
      <div className='SingleProductWrapper-swiper-wrapper'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0 : {
            slidesPerView : 2,
          }, 
          500 : {
            slidesPerView : 3,
          } ,
          768 : {
            slidesPerView : 2,
          } ,
          998 : {
            slidesPerView : 3,
          } ,
          1280 : {
            slidesPerView : 4,
          } 
        }}
        loop={true}
        style={{
          "--swiper-pagination-color": "#FFCC00",
          "--swiper-pagination-bullet-inactive-color": "#d9d9d9",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        <SwiperSlide>
          <div className='SingleProductWrapper-slide-img-wrapper'>
            <img src="../imgs/bag1.jpg" alt="productImg" className='SingleProductWrapper-slide-img'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='SingleProductWrapper-slide-img-wrapper'>
            <img src="../imgs/bag1.jpg" alt="productImg" className='SingleProductWrapper-slide-img'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='SingleProductWrapper-slide-img-wrapper'>
            <img src="../imgs/bag1.jpg" alt="productImg" className='SingleProductWrapper-slide-img'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='SingleProductWrapper-slide-img-wrapper'>
            <img src="../imgs/bag1.jpg" alt="productImg" className='SingleProductWrapper-slide-img'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='SingleProductWrapper-slide-img-wrapper'>
            <img src="../imgs/bag1.jpg" alt="productImg" className='SingleProductWrapper-slide-img'/>
          </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </section>
  )
}