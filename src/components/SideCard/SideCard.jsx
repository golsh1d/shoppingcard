import React from 'react'
import './SideCard.css'
import { useEffect , useRef , useState} from 'react';
import Card from '../Card/Card';

export default function SideCard({ styleProp , productInfoNext , onShowModal }) {
  const [mainProductInfo , setMainProductInfo] = useState([])  

  let sideCard = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        sideCard.current.classList.add("SideCard-container-dark");
    } else {
        sideCard.current.classList.remove("SideCard-container-dark");
    }
  }

  function showModal(productMaxCount) {
    onShowModal(productMaxCount)
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

  useEffect(() => {
    setMainProductInfo(productInfoNext)
  } , [productInfoNext])
  
  return (
    <nav className='SideCard-container' ref={sideCard} style={{ ...styleProp }}>
      <Card mainProductInfo={mainProductInfo} onShowModal={showModal}/>
    </nav>
  )
}