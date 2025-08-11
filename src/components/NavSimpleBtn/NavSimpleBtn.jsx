import React from 'react'
import './NavSimpleBtn.css'
import { useEffect , useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NavSimpleBtn() {
  let NavBtn = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        NavBtn.current.classList.add("NavSimpleBtn-container-dark");
    } else {
        NavBtn.current.classList.remove("NavSimpleBtn-container-dark");
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
    <Link className='NavSimpleBtn-container' to="/signing" ref={NavBtn}>SignUp/SignIn</Link>
  )
}
