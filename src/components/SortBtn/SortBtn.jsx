import React from 'react'
import './SortBtn.css'
import { useEffect , useRef , useState } from 'react';
import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import SortModal from '../SortModal/SortModal';
import Overlay from '../Overlay/Overlay';

export default function SortBtn({onSortPopular, onSortEarliest, onSortLatest }) {
  const[isModalShown , setIsModalShown] = useState(false)  
  const[overlayStyle, setOverlayStyle] = useState(null) 
  let sortBtn = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      sortBtn.current.classList.add("SortBtn-container-dark");
    } else {
      sortBtn.current.classList.remove("SortBtn-container-dark");
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

  function sortPopular() {
    onSortPopular()
    hideModal()
  }

  function sortEarliest() {
    onSortEarliest()
    hideModal()
  }

  function sortLatest() {
    onSortLatest()
    hideModal()
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
     <div className='SortBtn-container' ref={sortBtn} onClick={showModal}>
         <SwapVertRoundedIcon className='SortBtn-icon'/>
     </div>
     {isModalShown && <SortModal  onPopularLi={sortPopular} onEarliestLi={sortEarliest} onLatestLi={sortLatest}/>}
     <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}
