import React from 'react'
import './SingleProduct.css'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import SingleProductWrapper from '../../components/SingleProductWrapper/SingleProductWrapper'
import LogInAlertModal from '../../components/LogInAlertModal/LogInAlertModal'
import Overlay from '../../components/Overlay/Overlay'

export default function SingleProduct() {
  const[isLogIn , setIsLogIn] = useState(null)
  const[overlayStyle, setOverlayStyle] = useState(null) 
  const[goToNavTrigger, setGotoNavTrigger] = useState(null) 
  
  let { productID } = useParams()

  function userLogIn(bool) {
    if(bool === true) {
      setIsLogIn(true)
    } else if(bool === false) {
      setIsLogIn(false)
      setOverlayStyle({display : "block"})
    }
  }

  function hideModal() {
    setIsLogIn(true)
    setOverlayStyle({display : "none"})
  }

  function scrollToNav() {
    setGotoNavTrigger(prev => prev + 1)
  }
  
  return (
    <>
      <Nav goToNavTrigger={goToNavTrigger}/>
      <div className='SingleProduct-main-container'>
        <CardWrapper />
        <SingleProductWrapper id={productID} onLogIn={userLogIn} onScrollToNav={scrollToNav}/>
      </div>
      {isLogIn === false && <LogInAlertModal/>}
      <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}
