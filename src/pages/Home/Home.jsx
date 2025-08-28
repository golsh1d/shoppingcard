import React, { useState } from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import ProductsWrapper from '../../components/ProductsWrapper/ProductsWrapper'

export default function Home() {
  const [goToNavTrigger, setGoToNavTrigger] = useState(0)

  function scrollToNav() {
    setGoToNavTrigger(prev => prev + 1)
  }

  return (
    <>
      <Nav goToNavTrigger={goToNavTrigger}/>
      <div className='Home-main-container'>
        <CardWrapper/>
        <ProductsWrapper onScrollToNav={scrollToNav}/>
      </div>
    </>
  )
}
