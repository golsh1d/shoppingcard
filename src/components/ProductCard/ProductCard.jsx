import React from 'react'
import './ProductCard.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useEffect , useRef } from 'react';

export default function ProductCard() {
  let cardContainer = useRef()  
  let dollarIcon = useRef()  
  let cardDes = useRef()  

  function getLocalStorage() {
      let webAppereance = localStorage.getItem("mode");
      if (webAppereance === "dark") {
          cardContainer.current.classList.add("ProductCard-container-dark");
          dollarIcon.current.classList.add("ProductCard-dollar-icon-dark");
          cardDes.current.classList.add("ProductCard-des-dark");
      } else {
          cardContainer.current.classList.remove("ProductCard-container-dark");
          dollarIcon.current.classList.remove("ProductCard-dollar-icon-dark");
          cardDes.current.classList.remove("ProductCard-des-dark");
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
    <div className='ProductCard-container' ref={cardContainer}>
        <div className='ProductCard-img-wrapper'>
            <img src="./imgs/bag1.webp" alt="product" className='ProductCard-img'/>
        </div>
        <div className='ProductCard-detail'>
            <div className='ProductCard-head'>
                <div className='ProductCard-title'>Bag1</div>
                <div className='ProductCard-rate'>
                    <span className='ProductCard-rate-span'>4.5</span>
                    <StarRoundedIcon className='ProductCard-rate-icon'/>
                </div>
            </div>
            <div className='ProductCard-des' ref={cardDes}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat architecto earum provident illo, dignissimos quo officiis eaque quas incidunt ex.
            </div>
            <div className='ProductCard-icon-wrapper'>
                <div className='ProductCard-price'>
                    <span className='ProductCard-price-span'>25</span>
                    <MonetizationOnRoundedIcon className='ProductCard-dollar-icon' ref={dollarIcon}/>
                </div>
                <div className='ProductCard-btn'>
                    <AddRoundedIcon className='ProductCard-btn-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
