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
  
  let { productID } = useParams()

  const[productInfo , setProductInfo] = useState({})
  
  function addToCard(productInfo) {
    setProductInfo(productInfo)
  }

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
  
  return (
    <>
      <Nav productInfo={productInfo}/>
      <div className='SingleProduct-main-container'>
        <CardWrapper productInfo={productInfo}/>
        <SingleProductWrapper id={productID} onAdd={addToCard} onLogIn={userLogIn}/>
      </div>
      {isLogIn === false && <LogInAlertModal/>}
      <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}
