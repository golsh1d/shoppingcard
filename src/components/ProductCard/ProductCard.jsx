import React from 'react'
import './ProductCard.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useEffect , useRef , useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({id , title , img , rate , price , des, count, userSelectedCount, onLogIn, onAdd}) {

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

  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0 ; i < cookies.length ; i++) {
        const c = cookies[i].trim();
        if (c.startsWith(name + '=')) {
            return c.substring(name.length + 1)
        }
    }
  }

  function checkIsLogin(productInfo) {
    const username = getCookie('username')
    if(username) {
        onLogIn(true)
        onAdd(productInfo)
    } else {
        onLogIn(false)
    }
  }

  function addBtnClicked() {
    if (id && title && price && count && userSelectedCount) {
        let productInfo = {
            productID : id,
            productTitle : title,
            productPrice : price,
            productCount : count,
            productSelectedCount : userSelectedCount
        }
        checkIsLogin(productInfo)
    }
  }
    
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
    <div to={`/singleProduct/${id}`} className='ProductCard-container' ref={cardContainer}>
        <Link className='ProductCard-img-wrapper' to={`/singleProduct/${id}`}>
            <img src={img} alt="product" className='ProductCard-img'/>
        </Link>
        <div className='ProductCard-detail'>
            <div className='ProductCard-head'>
                <div className='ProductCard-title'>{title}</div>
                <div className='ProductCard-rate'>
                    <span className='ProductCard-rate-span'>{rate}</span>
                    <StarRoundedIcon className='ProductCard-rate-icon'/>
                </div>
            </div>
            <div className='ProductCard-des' ref={cardDes}>
                {des}           
            </div>
            <div className='ProductCard-icon-wrapper'>
                <div className='ProductCard-price'>
                    <span className='ProductCard-price-span'>{price}</span>
                    <MonetizationOnRoundedIcon className='ProductCard-dollar-icon' ref={dollarIcon}/>
                </div>
                <div className='ProductCard-btn' onClick={addBtnClicked}>
                    <AddRoundedIcon className='ProductCard-btn-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}