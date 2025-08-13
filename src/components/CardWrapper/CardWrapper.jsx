import React from 'react'
import './CardWrapper.css'
import { useEffect , useRef , useState} from 'react';
import Card from '../Card/Card';
import MaxCountAlertModal from '../MaxCountAlertModal/MaxCountAlertModal';
import Overlay from '../Overlay/Overlay';

export default function CardWrapper({ productInfo }) {
  const[mainProductInfo , setMainProductInfo] = useState({})
  const[isModalShown , setIsModalShown] = useState(false)
  const[productMaxCount , setProductMaxCount] = useState(null)
  const[overlayStyle, setOverlayStyle] = useState(null)

  let cardWrapper = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      cardWrapper.current.classList.add("CardWrapper-dark");
    } else {
      cardWrapper.current.classList.remove("CardWrapper-dark");
    }
  }

  function showModal(productMaxCount) {
    setProductMaxCount(productMaxCount)
    setIsModalShown(true)
    setOverlayStyle({display : "block"})
  }

  function hideModal() {
    setOverlayStyle({display : "none"})
    setIsModalShown(false)
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
    setMainProductInfo(productInfo)
  } , [ productInfo ])

  return (
    <>
    <section className='CardWrapper' ref={cardWrapper}>
      <Card mainProductInfo={mainProductInfo} onShowModal={showModal}/>
    </section>
    {isModalShown && <MaxCountAlertModal productMaxCount={productMaxCount}/>}
    <Overlay styleProp={overlayStyle} onOverlay={hideModal}/>
    </>
  )
}