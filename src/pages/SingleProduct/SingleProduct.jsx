import React from 'react'
import './SingleProduct.css'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import SingleProductWrapper from '../../components/SingleProductWrapper/SingleProductWrapper'

export default function SingleProduct() {
  return (
    <>
      <Nav />
      <div className='SingleProduct-main-container'>
        <CardWrapper />
        <SingleProductWrapper />
      </div>
    </>
  )
}
