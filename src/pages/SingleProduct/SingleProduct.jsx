import React from 'react'
import './SingleProduct.css'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import SingleProductWrapper from '../../components/SingleProductWrapper/SingleProductWrapper'

export default function SingleProduct() {
  
  let { productID } = useParams()
  
  return (
    <>
      <Nav />
      <div className='SingleProduct-main-container'>
        <CardWrapper />
        <SingleProductWrapper id={productID}/>
      </div>
    </>
  )
}
