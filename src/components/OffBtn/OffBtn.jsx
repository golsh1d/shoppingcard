import React from 'react'
import './OffBtn.css'
import { useEffect , useRef , useState } from 'react';

export default function OffBtn({ onOff }) {
  const [offInputvalue , setOffInputValue] = useState("Off Code ...")  
  const [isReadOnly , setIsReadOnly] = useState()  

  let btnInput = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        btnInput.current.classList.add("OffBtn-input-dark");
    } else {
        btnInput.current.classList.remove("OffBtn-input-dark");
  }}

  function getIsOffAppliedFromLocalStorage() {
    let localStorageOffApplied = JSON.parse(localStorage.getItem('offApplied')) || false

    if (localStorageOffApplied) {
      setIsReadOnly(true)
    } else {
      setIsReadOnly(false)
    }
  }

  function applyOffCodewithEnter(event) {
    if (event.key === 'Enter') {
      if (offInputvalue.trim() === "off-20") {
        onOff()
        localStorage.setItem('offApplied' , true)
        getIsOffAppliedFromLocalStorage()
      }
      setOffInputValue("Off Code ...")
    }
  }
  
  function applyOffCodeWithBtn() {
    if (offInputvalue.trim() === "off-20") {
      onOff()
      localStorage.setItem('offApplied' , true)
      getIsOffAppliedFromLocalStorage()
    }
    setOffInputValue("Off Code ...")
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
    getIsOffAppliedFromLocalStorage()
  } , [])

  return (
    <div className='OffBtn-container'>
        <input type="text" className='OffBtn-input' ref={btnInput} value={offInputvalue} onChange={(event) => setOffInputValue(event.target.value)} onKeyPress={(event) => applyOffCodewithEnter(event)} readOnly={isReadOnly}/>
        <button className='OffBtn-btn' onClick={applyOffCodeWithBtn}>Apply</button>
    </div>
  )
}
