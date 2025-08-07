import React from 'react'
import './ProductsWrapper.css'
import { useEffect , useRef } from 'react';
import ProductsWrapperTopSec from '../ProductsWrapperTopSec/ProductsWrapperTopSec'

export default function ProductsWrapper() {
  let ProductsWrapper = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        ProductsWrapper.current.classList.add("ProductsWrapper-dark");
    } else {
        ProductsWrapper.current.classList.remove("ProductsWrapper-dark");
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
    <div className='ProductsWrapper' ref={ProductsWrapper}>
        <ProductsWrapperTopSec />
    </div>
  )
}
