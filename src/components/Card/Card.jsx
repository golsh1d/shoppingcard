import React from 'react'
import './Card.css'
import { useRef , useEffect , useState } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import OffBtn from '../OffBtn/OffBtn';
import DownLoadBtn from '../DownLoadBtn/DownLoadBtn';
import CardTotal from '../CardTotal/CardTotal';

export default function Card({ onShowModal }) {
  const [allProductsInfo , setAllProductsInfo] = useState([])
  const [totalPrice , setTotalPrice] = useState(0)
  
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

  function getProductInfoFromLocalStorage() {
    let allProducts = JSON.parse(localStorage.getItem('productInfo'))

    if (allProducts) {
        setAllProductsInfo(allProducts)
    }
  }

  function showModal(productMaxCount) {
    onShowModal(productMaxCount)
  }

  function calcTotalPrice() {
    let localStorageArray = JSON.parse(localStorage.getItem('productInfo'))

    if (localStorageArray) {
        let totalPrice = 0

        localStorageArray.map(obj => {
            totalPrice = totalPrice + (obj.productPrice * obj.productSelectedCount)
        })
        
        setTotalPrice(totalPrice)
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

  useEffect(() => {
    const handleStorageUpdate = () => {
        getProductInfoFromLocalStorage();
    };

    getProductInfoFromLocalStorage()
    
    window.addEventListener("productUpdated", handleStorageUpdate);
    
    return () => {
        window.removeEventListener("productUpdated", handleStorageUpdate);
    };
  } , [])

  useEffect(() => {
    calcTotalPrice()
  } , [allProductsInfo])

  useEffect(() => {
      const handleStorageUpdate = () => {
          calcTotalPrice();
      };
      
      calcTotalPrice();
      
      window.addEventListener("lsSelectedCountUpdated", handleStorageUpdate);
      
      return () => {
          window.removeEventListener("lsSelectedCountUpdated", handleStorageUpdate);
      };
  }, []);  

  return (
    <div className='Card-container' ref={card}>
        <div className='Card-head'>
            <span>Card</span>
            <div className='Card-pay-btn'>Pay</div>
        </div>
        <div className='Card-products' ref={cardProducts}>
            {allProductsInfo && allProductsInfo.map(obj => (
                <CardProduct {...obj} key={obj.id} onShowModal={showModal}/>
            ))}
        </div>
        <div className='Card-total' ref={cardTotal}>
            <CardTotal totalPrice={totalPrice}/>
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
