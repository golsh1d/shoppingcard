import React from 'react'
import './CardProduct.css'
import { useRef , useEffect , useState } from 'react';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import ProductCounter from '../ProductCounter/ProductCounter';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


export default function CardProduct({ productID , productTitle, productCount, productPrice , onShowModal, onCount}) {
  const [count , setCount] = useState(null)
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

  function showModal(productMaxCount) {
    onShowModal(productMaxCount)
  }

  function countProduct(count) {
    onCount(count)
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

  useEffect(() => {
    setCount(productCount)
  } , [productCount])

  return (
    <div className='CardProduct'>
        <div className='CardProduct-product-title'>{productTitle}</div>
        <div className='CardProduct-right-sec'>
            <div className='CardProduct-product-price'>
            <span className='CardProduct-product-price-span'>{productPrice}</span>
            <MonetizationOnRoundedIcon className='CardProduct-dollar-icon' ref={dollarIcon}/>
            </div>
            <div className='CardProduct-detail'>
                <ProductCounter count={count} onShowModal={showModal} onCount={countProduct}/>
                <DeleteForeverRoundedIcon className='CardProduct-bin-icon' ref={binIcon}/>
            </div>
        </div>
    </div>
  )
}