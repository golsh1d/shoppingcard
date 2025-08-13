import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper'

export default function Home() {
  return (
    <>
      <Nav/>
      <div className='Home-main-container'>
        <CardWrapper/>
        <ProductsWrapper/>
      </div>
    </>
  )
}
