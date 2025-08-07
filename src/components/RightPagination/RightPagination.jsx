import React from 'react'
import './RightPagination.css'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useEffect , useRef } from 'react';

export default function RightPagination() {
  let rightPagination = useRef()  
  
  function getLocalStorage() {
      let webAppereance = localStorage.getItem("mode");
      if (webAppereance === "dark") {
          rightPagination.current.classList.add("RightPagination-container-dark");
      } else {
          rightPagination.current.classList.remove("RightPagination-container-dark");
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
    <div className='RightPagination-container' ref={rightPagination}>
        <ChevronRightRoundedIcon className='RightPagination-icon'/>
    </div>
  )
}
