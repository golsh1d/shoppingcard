import React, { useState } from 'react'
import './ProductsWrapper.css'
import { useEffect , useRef } from 'react';
import ProductsWrapperTopSec from '../ProductsWrapperTopSec/ProductsWrapperTopSec'
import ProductWrapperBottSec from '../ProductWrapperBottSec/ProductWrapperBottSec';

export default function ProductsWrapper({ onAdd }) {
  const[allReorderTrigger,setAllReorderTrigger] = useState(0)
  const[bagsReorderTrigger,setBagsReorderTrigger] = useState(0)
  const[shoesReorderTrigger,setShoesReorderTrigger] = useState(0)
  const[accReorderTrigger,setAccReorderTrigger] = useState(0)
  const[beltsReorderTrigger,setBeltsReorderTrigger] = useState(0)  
  const[popularSortTrigger,setPopularSortTrigger] = useState(0)  
  const[earliestSortTrigger,setEarliestSortTrigger] = useState(0)  
  const[latestSortTrigger,setLatestSortTrigger] = useState(0)  
  const[searchContent,setSearchContent] = useState("")  
 
  let ProductsWrapper = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        ProductsWrapper.current.classList.add("ProductsWrapper-dark");
    } else {
        ProductsWrapper.current.classList.remove("ProductsWrapper-dark");
  }}

  function handleAllReorder() {
    setAllReorderTrigger(prev => prev + 1)
  }

  function handleBagsReorder() {
    setBagsReorderTrigger(prev => prev + 1)
  }

  function handleShoesReorder() {
    setShoesReorderTrigger(prev => prev + 1)
  }

  function handleAccReorder() {
    setAccReorderTrigger(prev => prev + 1)
  }

  function handleBeltReorder() {
    setBeltsReorderTrigger(prev => prev + 1)
  }

  function handlePopularSort() {
    setPopularSortTrigger(prev => prev + 1)
  }

  function handleEarliestSort() {
    setEarliestSortTrigger(prev => prev + 1)
  }

  function handleLatestSort() {
    setLatestSortTrigger(prev => prev + 1)
  }

  function handleSearch(productTitle) {
    setSearchContent(productTitle)
  }

  function addTocard(productInfo) {
    onAdd(productInfo)
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
    <div className='ProductsWrapper' ref={ProductsWrapper}>
        <ProductsWrapperTopSec onAllReorder={handleAllReorder} onBagsReorder={handleBagsReorder} onShoesReorder={handleShoesReorder} onAccReorder={handleAccReorder} onBeltReorder={handleBeltReorder}  onSortPopularProducts={handlePopularSort} onSortEarliestProducts={handleEarliestSort}  onSortLatestProducts={handleLatestSort} onSearchInProducts={handleSearch}/>
        <ProductWrapperBottSec allReorderTrigger={allReorderTrigger} bagsReorderTrigger={bagsReorderTrigger} shoesReorderTrigger={shoesReorderTrigger} accReorderTrigger={accReorderTrigger} beltsReorderTrigger={beltsReorderTrigger}  popularSortTrigger={popularSortTrigger} earliestSortTrigger={earliestSortTrigger} latestSortTrigger={latestSortTrigger} searchContent={searchContent} onAdd={addTocard}/>
    </div>
  )
}
