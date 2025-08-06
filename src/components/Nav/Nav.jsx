import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useRef , useEffect , useState } from 'react';
import DarkOrLightMode from '../DarkOrLightMode/DarkOrLightMode';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'; 
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export default function Nav() {
  const[isLogIn, setIsLogIn] = useState(false)
  const[usernameInfo, setUserNameInfo] = useState("")

  let Nav = useRef()
  let NavLink = useRef()
  let NavBtn = useRef()
  let userIcon = useRef()
  let userName = useRef()
  let logOutSubMenu = useRef()
  let logOutSpan = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode")

    if (webAppereance === "dark" && isLogIn === false) {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        NavBtn.current.classList.add("Nav-btn-dark")
    } else if (webAppereance === "light" && isLogIn === false) {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        NavBtn.current.classList.remove("Nav-btn-dark")
    } else if (webAppereance === "dark" && isLogIn === true) {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        userIcon.current.classList.add("Nav-user-icon-dark")
        userName.current.classList.add("Nav-username-dark")
        logOutSubMenu.current.classList.add("Nav-logout-sub-menu-dark")
        logOutSpan.current.classList.add("Nav-logout-span-dark")
    } else if (webAppereance === "light" && isLogIn === true) {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        userIcon.current.classList.remove("Nav-user-icon-dark")
        userName.current.classList.remove("Nav-username-dark")
        logOutSubMenu.current.classList.remove("Nav-logout-sub-menu-dark")
        logOutSpan.current.classList.remove("Nav-logout-span-dark")
    } 
  }

  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0 ; i < cookies.length ; i++) {
        const c = cookies[i].trim();
        if (c.startsWith(name + '=')) {
            return c.substring(name.length + 1)
        }
    }
  }

  function checkIsLogin() {
    const username = getCookie('username')
    if(username) {
        setIsLogIn(true)
        setUserNameInfo(username)
    } else {
        setIsLogIn(false)
    }
  }

  function deleteCookie() {
    document.cookie = `username=; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/`;
    setIsLogIn(false)
  }

  useEffect(() => {
    checkIsLogin()
  } , [])

  useEffect(() => {
    const handleStorageUpdate = () => {
        getLocalStorage()
    }
    getLocalStorage()
    window.addEventListener("lsUpdated" , handleStorageUpdate)
    
    return () => {
        window.removeEventListener("lsUpdated" , handleStorageUpdate)
    }
  } , [isLogIn])

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
            {isLogIn ?
                <div className='Nav-login-info'>
                    <PersonRoundedIcon className='Nav-user-icon' ref={userIcon}/>
                    <span className='Nav-username' ref={userName}>{usernameInfo}</span>

                    <div className='Nav-logout-sub-menu' ref={logOutSubMenu} onClick={deleteCookie}>
                        <LogoutRoundedIcon className='Nav-logout-icon'/>
                        <span className='Nav-logout-span' ref={logOutSpan}>logOut</span>
                    </div>
                </div> :
                <Link className='Nav-btn' to="./signing" ref={NavBtn}>SignUp / SignIn</Link>
            }
        </div>
    </nav>
  )
}