import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useRef , useEffect , useState } from 'react';
import DarkOrLightMode from '../DarkOrLightMode/DarkOrLightMode';
import SideCard from '../SideCard/SideCard';
import Overlay from '../Overlay/Overlay';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function Nav() {
  const[isLogIn, setIsLogIn] = useState(false)
  const[usernameInfo, setUserNameInfo] = useState("")
  const[sideCardStyle, setSideCardStyle] = useState(null)
  const[overlayStyle, setOverlayStyle] = useState(null)

  let Nav = useRef()
  let NavLink = useRef()
  let NavBtn = useRef()
  let logOutSubMenu = useRef()
  let shopIcon = useRef()
  let loginBtn = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode")

    if (webAppereance === "dark" && isLogIn === false) {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        NavBtn.current.classList.add("Nav-btn-dark")
        shopIcon.current.classList.add("Nav-shopp-icon-dark")
    } else if (webAppereance === "light" && isLogIn === false) {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        NavBtn.current.classList.remove("Nav-btn-dark")
        shopIcon.current.classList.remove("Nav-shopp-icon-dark")
    } else if (webAppereance === "dark" && isLogIn === true) {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        logOutSubMenu.current.classList.add("Nav-logout-sub-menu-dark")
        shopIcon.current.classList.add("Nav-shopp-icon-dark")
        loginBtn.current.classList.add("Nav-login-info-dark")
    } else if (webAppereance === "light" && isLogIn === true) {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        logOutSubMenu.current.classList.remove("Nav-logout-sub-menu-dark")
        shopIcon.current.classList.remove("Nav-shopp-icon-dark")
        loginBtn.current.classList.remove("Nav-login-info-dark")
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

  function showSideCard() {
    setSideCardStyle({transform : "translateX(0px)"})
    setOverlayStyle({display : "block"})
  }

  function hideSideCard() {
    setSideCardStyle({transform : "translateX(-300px)"})
    setOverlayStyle({display : "none"})
  }

  function showLogOutMenu() {
    logOutSubMenu.current.style.display = "flex"
    loginBtn.current.style.borderRadius = "5px 5px 0px 0px"
  }

  function hideLogOutMenu() {
    logOutSubMenu.current.style.display = "none"
    loginBtn.current.style.borderRadius = "5px"
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
    <>
        <nav className='Nav-container' ref={Nav}>
            <div className='Nav-left'>
                <ul className="Nav-ul">
                    <li className="Nav-li">
                        <Link className='Nav-link' to="/" ref={NavLink}>Home</Link>
                    </li>
                    <li className="Nav-li Nav-li-shopp-icon">
                        <LocalGroceryStoreRoundedIcon className='Nav-shopp-icon' ref={shopIcon} onClick={showSideCard}/>
                    </li>
                </ul>
            </div>
            <div className='Nav-right'>
                <DarkOrLightMode />
                {isLogIn ?
                    <div className='Nav-login-info' ref={loginBtn} onMouseLeave={hideLogOutMenu}>
                        <span className='Nav-username'>{usernameInfo}</span>
                        <ExpandMoreRoundedIcon className='Nav-chevron' onClick={showLogOutMenu}/>

                        <div className='Nav-logout-sub-menu' ref={logOutSubMenu} onClick={deleteCookie}>
                            <span className='Nav-logout-span'>logOut</span>
                            <LogoutRoundedIcon className='Nav-logout-icon'/>
                        </div>
                    </div> :
                    <Link className='Nav-btn' to="./signing" ref={NavBtn}>SignUp / SignIn</Link>
                }
            </div>
        </nav>
        <SideCard styleProp={sideCardStyle} />
        <Overlay styleProp={overlayStyle} onOverlay={hideSideCard}/>
    </>
  )
}