import React from 'react'
import './ProductsSortBtn.css'
import { useEffect , useRef , useState } from 'react';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import SortModal from '../SortModal/SortModal';
import Overlay from '../Overlay/Overlay';

export default function ProductsSortBtn() {
  const[isModalShown , setIsModalShown] = useState(false)  
  const[overlayStyle, setOverlayStyle] = useState(null) 
  let sortBtn = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      sortBtn.current.classList.add("ProductsSortBtn-container-dark");
    } else {
      sortBtn.current.classList.remove("ProductsSortBtn-container-dark");
    }
  }

  function showModal() {
    setIsModalShown(true)
    setOverlayStyle({display : "block"})
  }

  function hideModal() {
    setIsModalShown(false)
    setOverlayStyle({display : "none"})
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

  return (
    <>
     <div className='ProductsSortBtn-container' ref={sortBtn} onClick={showModal}>
         <SwapVertRoundedIcon className='ProductsSortBtn-icon'/>
     </div>
     {isModalShown && <SortModal />}
     <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}
