import React from 'react'
import './SingleProduct.css'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import SingleProductWrapper from '../../components/SingleProductWrapper/SingleProductWrapper'

export default function SingleProduct() {
  
  let { productID } = useParams()

  const[productInfo , setProductInfo] = useState({})
  
  function addToCard(productInfo) {
    setProductInfo(productInfo)
  }
  
  return (
    <>
      <Nav productInfo={productInfo}/>
      <div className='SingleProduct-main-container'>
        <CardWrapper productInfo={productInfo}/>
        <SingleProductWrapper id={productID} onAddGrandParent={addToCard}/>
      </div>
    </>
  )
}
