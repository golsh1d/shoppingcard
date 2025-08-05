import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useRef , useEffect } from 'react';
import DarkOrLightMode from '../DarkOrLightMode/DarkOrLightMode';

export default function Nav() {
  let Nav = useRef()
  let NavLink = useRef()
  let NavBtn = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode")
    if (webAppereance === "dark") {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        NavBtn.current.classList.add("Nav-btn-dark")
    } else {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        NavBtn.current.classList.remove("Nav-btn-dark")
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

  return (
    <nav className='Nav-container' ref={Nav}>
        <div className='Nav-left'>
            <ul className="Nav-ul">
                <li className="Nav-li">
                    <Link className='Nav-link' to="/" ref={NavLink}>Home</Link>
                </li>
            </ul>
        </div>
        <div className='Nav-right'>
            <DarkOrLightMode />
            <Link className='Nav-btn' to="./signing" ref={NavBtn}>SignUp / SignIn</Link>
        </div>
    </nav>
  )
}
