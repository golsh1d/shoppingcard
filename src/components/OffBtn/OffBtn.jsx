import React from 'react'
import './OffBtn.css'
import { useEffect , useRef , useState } from 'react';

export default function OffBtn() {
  const [offInputvalue , setOffInputValue] = useState("Off Code ...")  

  let btnInput = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        btnInput.current.classList.add("OffBtn-input-dark");
    } else {
        btnInput.current.classList.remove("OffBtn-input-dark");
  }}

  function btnClicked() {
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

  return (
    <div className='OffBtn-container'>
        <input type="text" className='OffBtn-input' ref={btnInput} value={offInputvalue} onChange={(event) => setOffInputValue(event.target.value)}/>
        <button className='OffBtn-btn' onClick={btnClicked}>Apply</button>
    </div>
  )
}
