import React from 'react'
import './LeftPaginationBtn.css'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import { useEffect , useRef } from 'react';

export default function LeftPaginationBtn({ onLeft }) {
  let LeftPagination = useRef()  

  function moveToLeft() {
    onLeft()
  }

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        LeftPagination.current.classList.add("LeftPaginationBtn-container-dark");
    } else {
        LeftPagination.current.classList.remove("LeftPaginationBtn-container-dark");
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
    <div className='LeftPaginationBtn-container' ref={LeftPagination} onClick={moveToLeft}>
        <ChevronLeftRoundedIcon className='LeftPaginationBtn-icon'/>
    </div>
  )
}
