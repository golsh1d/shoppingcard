import React from 'react'
import './RightPaginationBtn.css'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useEffect , useRef } from 'react';

export default function RightPaginationBtn({ onRight }) {
  let RightPagination = useRef()  

  function moveToRight (){
    onRight()
  }
  
  function getLocalStorage() {
      let webAppereance = localStorage.getItem("mode");
      if (webAppereance === "dark") {
          RightPagination.current.classList.add("RightPaginationBtn-container-dark");
      } else {
          RightPagination.current.classList.remove("RightPaginationBtn-container-dark");
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
    <div className='RightPaginationBtn-container' ref={RightPagination} onClick={moveToRight}>
        <ChevronRightRoundedIcon className='RightPaginationBtn-icon'/>
    </div>
  )
}
