import React, { useEffect , useState , useRef} from 'react'
import './MaxCountAlertModal.css'

export default function MaxCountAlertModal({ productMaxCount }) {
  let [productCount , setProductCount] = useState(0)
  let countAlert = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode")
    if (webAppereance === "dark") {
        countAlert.current.classList.add("MaxCountAlertModal-container-dark")
    } else {
        countAlert.current.classList.remove("MaxCountAlertModal-container-dark")
    }
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

  useEffect(() => {
    setProductCount(productMaxCount)
  } , [productMaxCount])  

  return (
    <div className='MaxCountAlertModal-container' ref={countAlert}>Sorry! We only have {productCount} of this item.</div>
  )
}
