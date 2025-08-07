import React from 'react'
import './LeftPagination.css'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useEffect , useRef } from 'react';

export default function LeftPagination({ onLeft }) {
  let leftPagination = useRef()  

  function moveToLeft() {
    onLeft()
  }

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        leftPagination.current.classList.add("LeftPagination-container-dark");
    } else {
        leftPagination.current.classList.remove("LeftPagination-container-dark");
  }}
    
  useEffect(() => {
    const handleStorageUpdate = () => {
        getLocalStorage();
    };
    
    getLocalStorage();
    
    window.addEventListener("lsUpdated", handleStorageUpdate);
    
    return () => {
        window.removeEventListener("lsUpdated", handleStorageUpdate);
    };
  }, []);    

  return (
    <div className='LeftPagination-container' ref={leftPagination} onClick={moveToLeft}>
        <ChevronLeftRoundedIcon className='LeftPagination-icon'/>
    </div>
  )
}
