import React from 'react'
import './Card.css'
import { useRef , useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import OffBtn from '../OffBtn/OffBtn';
import DownLoadBtn from '../DownLoadBtn/DownLoadBtn';
import CardTotal from '../CardTotal/CardTotal';

export default function Card() {

  let card = useRef()  
  let cardProducts = useRef()  
  let cardTotal = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        card.current.classList.add("Card-container-dark");
        cardProducts.current.classList.add("Card-products-dark");
        cardTotal.current.classList.add("Card-total-dark");
    } else {
        card.current.classList.remove("Card-container-dark");
        cardProducts.current.classList.remove("Card-products-dark");
        cardTotal.current.classList.remove("Card-total-dark");
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
    <div className='Card-container' ref={card}>
        <div className='Card-title'>Card</div>
        <div className='Card-products' ref={cardProducts}>
            <CardProduct />
        </div>
        <div className='Card-total' ref={cardTotal}>
            <CardTotal />
        </div>
        <div className='Card-off'>
            <OffBtn />
        </div>
        <div className='Card-download'>
            <DownLoadBtn />
        </div>
    </div>
  )
}
