import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useRef , useEffect , useState } from 'react';
import DarkOrLightMode from '../DarkOrLightMode/DarkOrLightMode';
import SideCard from '../SideCard/SideCard';
import Overlay from '../Overlay/Overlay';
import NavAccardeonBtn from '../NavAccardeonBtn/NavAccardeonBtn';
import NavSimpleBtn from '../NavSimpleBtn/NavSimpleBtn';
import LogOutModal from '../LogOutModal/LogOutModal';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';

export default function Nav() {
  const[isLogIn, setIsLogIn] = useState(false)
  const[sideCardStyle, setSideCardStyle] = useState(null)
  const[overlayStyle, setOverlayStyle] = useState(null)
  const[isModalShown, setIsModalShown] = useState(false)

  let Nav = useRef()
  let NavLink = useRef()
  let shopIcon = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode")

    if (webAppereance === "dark" && isLogIn === false) {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        shopIcon.current.classList.add("Nav-shopp-icon-dark")
    } else if (webAppereance === "light" && isLogIn === false) {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        shopIcon.current.classList.remove("Nav-shopp-icon-dark")
    } else if (webAppereance === "dark" && isLogIn === true) {
        Nav.current.classList.add("Nav-container-dark")
        NavLink.current.classList.add("Nav-link-dark")
        shopIcon.current.classList.add("Nav-shopp-icon-dark")
    } else if (webAppereance === "light" && isLogIn === true) {
        Nav.current.classList.remove("Nav-container-dark")
        NavLink.current.classList.remove("Nav-link-dark")
        shopIcon.current.classList.remove("Nav-shopp-icon-dark")
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
    } else {
        setIsLogIn(false)
    }
  }

  function showSideCard() {
    setSideCardStyle({transform : "translateX(0px)"})
    setOverlayStyle({display : "block"})
  }

  function hideSideCard() {
    setSideCardStyle({transform : "translateX(-300px)"})
    setOverlayStyle({display : "none"})
  }

  function deleteCookie() {
    setIsModalShown(false)
    document.cookie = `username=; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/`;
    setIsLogIn(false) 
  }

  function showModal() {
    setIsModalShown(true)
  }

  function closeModal() {
    setIsModalShown(false)
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
                  <NavAccardeonBtn onLogOut={showModal}/> :
                  <NavSimpleBtn />
                }
            </div>
        </nav>
        {isModalShown && <LogOutModal onCloseModal={closeModal} onNo={closeModal} onYes={deleteCookie}/>}
        <SideCard styleProp={sideCardStyle} />
        <Overlay styleProp={overlayStyle} onOverlay={hideSideCard}/>
    </>
  )
} 