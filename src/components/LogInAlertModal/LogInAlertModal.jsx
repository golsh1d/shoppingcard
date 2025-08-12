import React from 'react'
import './LogInAlertModal.css'
import { Link } from 'react-router-dom'
import { useEffect , useRef } from 'react';

export default function LogInAlertModal() {
  let loginAlert = useRef()
  let loginBtn = useRef()    

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        loginAlert.current.classList.add("LogInAlertModal-container-dark");
        loginBtn.current.classList.add("LogInAlertModal-btn-dark");
    } else {
        loginAlert.current.classList.remove("LogInAlertModal-container-dark");
        loginBtn.current.classList.remove("LogInAlertModal-btn-dark");
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
    <div className='LogInAlertModal-container' ref={loginAlert}>
        <span className='LogInAlertModal-title'>Please login first!</span>
        <Link to={"/signing"} className='LogInAlertModal-btn' ref={loginBtn}>OK</Link>
    </div>
  )
}