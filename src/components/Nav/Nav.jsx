import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useRef , useEffect , useState } from 'react';
import DarkOrLightBtn from '../DarkOrLightBtn/DarkOrLightBtn'
import SideCard from '../SideCard/SideCard';
import Overlay from '../Overlay/Overlay';
import LogOutBtn from '../LogOutBtn/LogOutBtn'
import LogInBtn from '../LogInBtn/LogInBtn';
import LogOutModal from '../LogOutModal/LogOutModal';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import MaxCountAlertModal from '../MaxCountAlertModal/MaxCountAlertModal';

export default function Nav({ goToNavTrigger }) {
  const[isLogIn, setIsLogIn] = useState(false)
  const[sideCardStyle, setSideCardStyle] = useState(null)
  const[sideOverlayStyle, setSideOverlayStyle] = useState(null)
  const[modalOverLayStyle, setModalOverLayStyle] = useState(null)
  const[isLogoutModalShown, setIsLogOutModalShown] = useState(false)
  const[lsCount , setLsCount] = useState(null)
  const[isCountAlertModalShown , setIsCountAlertModalShown] = useState(false)
  const[productMaxCount , setProductMaxCount] = useState(null)

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
    setSideOverlayStyle({display : "block"})
  }

  function hideSideCard() {
    setSideCardStyle({transform : "translateX(-300px)"})
    setSideOverlayStyle({display : "none"})
  }

  function deleteCookie() {
    setIsLogOutModalShown(false)
    document.cookie = `username=; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/`;
    setIsLogIn(false) 
    window.dispatchEvent(new Event("isLogInChanged"))
  }

  function showModal() {
    setIsLogOutModalShown(true)
  }

  function closeLogOutModal() {
    setIsLogOutModalShown(false)
  }

  function getCountOfLocalStorageObj() {
    let allObjs = JSON.parse(localStorage.getItem('productInfo'))
    const username = getCookie('username')

    if (allObjs && username) {
      setLsCount(allObjs.length)
    } else {
      setLsCount(0)
    }

  }

  function showCountAlertModal(productMaxCount) {
    setProductMaxCount(productMaxCount)
    setIsCountAlertModalShown(true)
    setModalOverLayStyle({ display : "block" , zIndex : 11 })
  }

  function hideCountAlertModal() {
    setModalOverLayStyle({display : "none"})
    setIsCountAlertModalShown(false)
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

  useEffect(() => {
    const handleStorageUpdate = () => {
        getCountOfLocalStorageObj()
    }

    getCountOfLocalStorageObj()
    
    window.addEventListener("productUpdated" , handleStorageUpdate)
    
    return () => {
        window.removeEventListener("productUpdated" , handleStorageUpdate)
    }
  } , [])

  useEffect(() => {
    const handleStorageUpdate = () => {
        getCountOfLocalStorageObj()
    }

    getCountOfLocalStorageObj()
    
    window.addEventListener("isLogInChanged" , handleStorageUpdate)
    
    return () => {
        window.removeEventListener("isLogInChanged" , handleStorageUpdate)
    }
  } , [])

  useEffect(() => {
    Nav.current.scrollIntoView({ behavior : "smooth" , block : "start" })
  } , [goToNavTrigger])

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
                        <div className='Nav-shopp-icon-badge'>{lsCount}</div>
                    </li>
                </ul>
            </div>
            <div className='Nav-right'>
                <DarkOrLightBtn />
                {isLogIn ?
                  <LogOutBtn onLogOut={showModal}/> :
                  <LogInBtn />
                }
            </div>
        </nav>
        {isLogoutModalShown && <LogOutModal onCloseModal={closeLogOutModal} onNo={closeLogOutModal} onYes={deleteCookie}/>}
        <SideCard styleProp={sideCardStyle} onShowModal={showCountAlertModal}/>
        {isCountAlertModalShown && <MaxCountAlertModal productMaxCount={productMaxCount}/>}
        <Overlay styleProp={sideOverlayStyle} onOverlay={hideSideCard}/>
        <Overlay styleProp={modalOverLayStyle} onOverlay={hideCountAlertModal}/>
    </>
  )
} 