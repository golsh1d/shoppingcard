import React from 'react'
import './ProductCounter.css'
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import { useState } from 'react';

export default function ProductCounter() {
  const[productCount , setProductCount] = useState(1)

  function increaseCount() {
    let count = productCount + 1
    
    setProductCount(count)
  }

  function decreaseCount() {
    let count = productCount - 1
    
    if (count) {
        setProductCount(count)
    }
  }

  return (
    <div className='ProductCounter-container'>
        <ArrowDropDownCircleRoundedIcon className='ProductCounter-down-arrow' onClick={decreaseCount}/>
        <span className='ProductCounter-span'>{productCount}</span>
        <ArrowDropDownCircleRoundedIcon className='ProductCounter-up-arrow' onClick={increaseCount}/>
    </div>
  )
}
