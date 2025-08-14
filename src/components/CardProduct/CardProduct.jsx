import React from 'react'
import './CardProduct.css'
import { useRef , useEffect , useState } from 'react';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import CounterBtn from '../CounterBtn/CounterBtn';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


export default function CardProduct({ productID , productTitle, productCount, productSelectedCount, productPrice , onShowModal}) {
  const [count , setCount] = useState(null)
  const [selectedCount , setSelectedCount] = useState(null)
  const [mainID , setMainID] = useState(null)
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

  useEffect(() => {
    setSelectedCount(productSelectedCount)
  } , [productSelectedCount])

  useEffect(() => {
    setMainID(productID)
  } , [productID])

  return (
    <div className='CardProduct'>
        <div className='CardProduct-product-title'>{productTitle}</div>
        <div className='CardProduct-right-sec'>
            <div className='CardProduct-product-price'>
            <span className='CardProduct-product-price-span'>{productPrice}</span>
            <MonetizationOnRoundedIcon className='CardProduct-dollar-icon' ref={dollarIcon}/>
            </div>
            <div className='CardProduct-detail'>
                <CounterBtn count={count} selectedCount={selectedCount} mainID={mainID} onShowModal={showModal}/>
                <DeleteForeverRoundedIcon className='CardProduct-bin-icon' ref={binIcon}/>
            </div>
        </div>
    </div>
  )
}