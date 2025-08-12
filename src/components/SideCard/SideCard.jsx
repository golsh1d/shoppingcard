import React from 'react'
import './SideCard.css'
import { useEffect , useRef } from 'react';
import Card from '../Card/Card';

export default function SideCard({ styleProp }) {

  let sideCard = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        sideCard.current.classList.add("SideCard-container-dark");
    } else {
        sideCard.current.classList.remove("SideCard-container-dark");
    }
  }
  
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
    <nav className='SideCard-container' ref={sideCard} style={{ ...styleProp }}>
      <Card />
    </nav>
  )
}