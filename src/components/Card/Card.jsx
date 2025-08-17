import React from 'react'
import './Card.css'
import { useRef , useEffect , useState } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import OffBtn from '../OffBtn/OffBtn';
import DownLoadBtn from '../DownLoadBtn/DownLoadBtn';
import CardTotal from '../CardTotal/CardTotal';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';

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

  // run when component mount and ls got updated
  function getProductInfoFromLocalStorage() {
    let allProducts = JSON.parse(localStorage.getItem('productInfo')) || []

    if (allProducts.length > 0) {
        setAllProductsInfo(allProducts)
    } else {
        setAllProductsInfo([])
    }
  }

  function showModal(productMaxCount) {
    onShowModal(productMaxCount)
  }

  // run when component mount and ls got updated and allproducts got updated
  function calcTotalPrice() {
    let localStorageArray = JSON.parse(localStorage.getItem('productInfo')) || []

    if (localStorageArray.length > 0 && allProductsInfo.length > 0) {
        let totalPrice = 0

        localStorageArray.map(obj => {
            totalPrice = totalPrice + (obj.productPrice * obj.productSelectedCount)
        })
        
        setTotalPrice(totalPrice)
    } else if (allProductsInfo.length === 0) {
        setTotalPrice(0)
    }

  }

  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0 ; i < cookies.length ; i++) {
        const c = cookies[i].trim();
        if (c.startsWith(name + '=')) {
            return c.substring(name.length + 1)
        }
    }
  }

  function checkIsLogin() {
    const username = getCookie('username')

    if (username === undefined) {
        setAllProductsInfo([])
    } else {
        getProductInfoFromLocalStorage()
    }
  }

  // run when component mount and cookie got updated 
  function showProducts() {
    checkIsLogin()
  }

  function applyOffCode() {
    if (totalPrice > 0) {
        setTotalPrice(prev => prev - (prev * 0.2))
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
    getProductInfoFromLocalStorage()
  } , [])

  useEffect(() => {
      const handleCookieUpdate = () => {
          showProducts();
      };
      
      showProducts();
      
      window.addEventListener("isLogInChanged", handleCookieUpdate);
      
      return () => {
          window.removeEventListener("isLogInChanged", handleCookieUpdate);
      };
  }, []);   

  useEffect(() => {
    showProducts()
  } , [])

  useEffect(() => {
    calcTotalPrice()
  } , [])

  useEffect(() => {
    calcTotalPrice()
  } , [allProductsInfo])  

  return (
    <div className='Card-container' ref={card}>
        <div className='Card-head'>
            <span>Card</span>
            <div className='Card-pay-btn'>Pay</div>
        </div>
        <div className='Card-products' ref={cardProducts}>
            {allProductsInfo.length > 0
            ? 
            allProductsInfo.map(obj => (
                <CardProduct {...obj} key={obj.id} onShowModal={showModal}/>
            )) 
            :
            <RemoveShoppingCartRoundedIcon className='Card-emptyCard-icon'/>
            }
        </div>
        <div className='Card-total' ref={cardTotal}>
            <CardTotal totalPrice={totalPrice}/>
        </div>
        <div className='Card-off'>
            <OffBtn onOff={applyOffCode} totalPrice={totalPrice}/>
        </div>
        <div className='Card-download'>
            <DownLoadBtn totalPrice={totalPrice}/>
        </div>
    </div>
  )
}
