import React from 'react'
import "./LogOutModal.css"
import { useState , useEffect , useRef } from 'react'
import Overlay from '../Overlay/Overlay'

export default function LogOutModal({ onCloseModal, onNo , onYes }) {
  const[overlayStyle, setOverlayStyle] = useState(null) 

  let logoutModal = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode")

    if (webAppereance === "dark") {
        logoutModal.current.classList.add("LogOutModal-container-dark")
    } else {
        logoutModal.current.classList.remove("LogOutModal-container-dark")
    }
  }
  
  function hideModal() {
    onCloseModal()
  }

  function yesBtnClicked() {
    onYes()
  }

  function noBtnClicked() {
    onNo()
  }

  useEffect(() => {
    const handleStorageUpdate = () => {
        getLocalStorage()
    }
    getLocalStorage()
    window.addEventListener("lsUpdated" , handleStorageUpdate)
      
    return () => {
        window.removeEventListener("lsUpdated" , handleStorageUpdate)
    }
  } , [])

  useEffect(() => {
    setOverlayStyle({display : "block"})
  } , [])

  return (
    <>
    <div className='LogOutModal-container' ref={logoutModal}>
        <div className='LogOutModal-title'>Are you sure you want to log out?</div>
        <div className='LogOutModal-btn-container'>
            <button className='LogOutModal-btn LogOutModal-yes-btn' onClick={yesBtnClicked}>Yes</button>
            <button className='LogOutModal-btn LogOutModal-no-btn' onClick={noBtnClicked}>No</button>
        </div>
    </div>
    <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}
