import React from 'react'
import './CardTotal.css'
import { useRef , useEffect , useState} from 'react';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';

export default function CardTotal({totalPrice}) {
  const [cardTotalAmount , setCardTotalAmount] = useState(0)  
  let dollarIcon = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        dollarIcon.current.classList.add("CardTotal-icon-dark");
    } else {
        dollarIcon.current.classList.remove("CardTotal-icon-dark");
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

  useEffect(() => {
    setCardTotalAmount(totalPrice)
  } , [totalPrice])

  return (
    <div className='CardTotal-container'>
        Total Price : 
        <div className='CardTotal-price'>
            <span className='CardTotal-price-span'>{cardTotalAmount}</span>
            <MonetizationOnRoundedIcon className='CardTotal-icon' ref={dollarIcon}/>
        </div>
    </div>
  )
}
