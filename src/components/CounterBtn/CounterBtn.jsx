import React, { useEffect } from 'react'
import './CounterBtn.css'
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import { useState } from 'react';

export default function CounterBtn({ count , onShowModal , selectedCount , mainID}) {
  const[productSelectedCount , setProductSelectedCount] = useState(1)
  const[productMaxCount , setProductMaxCount] = useState(1)
  const[productID , setProductID] = useState(1)

  function setSelectedCountToLocalStorage(count) {
    let localStorageArray = JSON.parse(localStorage.getItem('productInfo'))

    if (localStorageArray) {
      let mainProduct = localStorageArray.find(obj => {
        if (obj.productID == productID) {
          return obj
        }
      })

      mainProduct.productSelectedCount = count

      localStorage.setItem('productInfo' , JSON.stringify(localStorageArray))
    }
  }

  function increaseCount() {
    let count = productSelectedCount + 1
    
    if (count <= productMaxCount) {
      setProductSelectedCount(count)
      setSelectedCountToLocalStorage(count)
      window.dispatchEvent(new Event("productUpdated"))
    } else {
      onShowModal(productMaxCount)
    }
  }

  function decreaseCount() {
    let count = productSelectedCount - 1
    
    if (count) {
        setProductSelectedCount(count)
        setSelectedCountToLocalStorage(count)
        window.dispatchEvent(new Event("productUpdated"))
    }
  }

  useEffect(() => {
    setProductMaxCount(count)
  } , [count])

  useEffect(() => {
    setProductSelectedCount(selectedCount)
  } , [selectedCount])

  useEffect(() => {
    setProductID(mainID)
  } , [mainID])

  return (
    <div className='CounterBtn-container'>
        <ArrowDropDownCircleRoundedIcon className='CounterBtn-down-arrow' onClick={decreaseCount}/>
        <span className='CounterBtn-span'>{productSelectedCount}</span>
        <ArrowDropDownCircleRoundedIcon className='CounterBtn-up-arrow' onClick={increaseCount}/>
    </div>
  )
}
