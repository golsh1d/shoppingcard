import React, { useEffect } from 'react'
import './ProductCounter.css'
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import { useState } from 'react';

export default function ProductCounter({ count , onShowModal , onCount }) {
  const[productCount , setProductCount] = useState(1)
  const[productMaxCount , setProductMaxCount] = useState(1)

  function increaseCount() {
    let count = productCount + 1
    
    if (count <= productMaxCount) {
      setProductCount(count)
      onCount(count)
    } else {
      onShowModal(productMaxCount)
    }
  }

  function decreaseCount() {
    let count = productCount - 1
    
    if (count) {
        setProductCount(count)
        onCount(count)
    }
  }

  useEffect(() => {
    setProductMaxCount(count)
  } , [count])

  return (
    <div className='ProductCounter-container'>
        <ArrowDropDownCircleRoundedIcon className='ProductCounter-down-arrow' onClick={decreaseCount}/>
        <span className='ProductCounter-span'>{productCount}</span>
        <ArrowDropDownCircleRoundedIcon className='ProductCounter-up-arrow' onClick={increaseCount}/>
    </div>
  )
}
