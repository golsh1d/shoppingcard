import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper'
import { useState } from 'react'

export default function Home() {
  const[productInfo , setProductInfo] = useState({})

  function addToCard(productInfo) {
    setProductInfo(productInfo)
  }

  return (
    <>
      <Nav productInfo={productInfo}/>
      <div className='Home-main-container'>
        <CardWrapper productInfo={productInfo}/>
        <ProductsWrapper onAddGrandParent={addToCard}/>
      </div>
    </>
  )
}
