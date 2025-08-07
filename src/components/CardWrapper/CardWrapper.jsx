import React from 'react'
import './CardWrapper.css'
import { useEffect , useRef } from 'react';

export default function CardWrapper() {

  let cardWrapper = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      cardWrapper.current.classList.add("CardWrapper-dark");
    } else {
      cardWrapper.current.classList.remove("CardWrapper-dark");
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
    <section className='CardWrapper' ref={cardWrapper}></section>
  )
}