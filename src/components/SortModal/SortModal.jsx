import React from 'react'
import './SortModal.css'
import { useRef , useEffect } from 'react';

export default function SortModal({ onPopularLi, onEarliestLi, onLatestLi }) {
  let sortModal = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      sortModal.current.classList.add("SortModal-container-dark");
    } else {
      sortModal.current.classList.remove("SortModal-container-dark");
    }
  }

  function popularLiClicked() {
    onPopularLi()
  }

  function earliestLiClicked() {
    onEarliestLi()
  }
  
  function latestLiClicked() {
    onLatestLi()
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
    <div className='SortModal-container' ref={sortModal}>
        <div className='SortModal-title'>Sort By ...</div>
        <ul className='SortModal-ul'>
            <li className='SortModal-li' onClick={popularLiClicked}>
                <span className='SortModal-span'>Most Popular</span>
            </li>
            <li className='SortModal-li' onClick={earliestLiClicked}>
                <span className='SortModal-span'>Earliest</span>
            </li>
            <li className='SortModal-li' onClick={latestLiClicked}>
                <span className='SortModal-span'>Latest</span>
            </li>
        </ul>
    </div>
  )
}
