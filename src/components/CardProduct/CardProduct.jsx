import React from 'react'
import './CardProduct.css'
import { useRef , useEffect } from 'react';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import ProductCounter from '../ProductCounter/ProductCounter';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


export default function CardProduct() {
  let dollarIcon = useRef()
  let binIcon = useRef()
  
  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        dollarIcon.current.classList.add("CardProduct-dollar-icon-dark");
        binIcon.current.classList.add("CardProduct-bin-icon-dark");
    } else {
        dollarIcon.current.classList.remove("CardProduct-dollar-icon-dark");
        binIcon.current.classList.remove("CardProduct-bin-icon-dark");
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
    <div className='CardProduct'>
        <div className='CardProduct-product-title'>Arko</div>
        <div className='CardProduct-product-price'>
            <span className='CardProduct-product-price-span'>1000</span>
            <MonetizationOnRoundedIcon className='CardProduct-dollar-icon' ref={dollarIcon}/>
        </div>
        <ProductCounter />
        <DeleteForeverRoundedIcon className='CardProduct-bin-icon' ref={binIcon}/>
    </div>
  )
}
