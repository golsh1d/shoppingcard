import React from 'react'
import './NavAccardeonBtn.css'
import { useEffect , useRef , useState} from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';


export default function NavAccardeonBtn({ onLogOut }) {
  const[usernameInfo, setUserNameInfo] = useState("")  

  let loginBtn = useRef()   
  let logOutSubMenu = useRef()   

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      loginBtn.current.classList.add("NavAccardeonBtn-container-dark");
      logOutSubMenu.current.classList.add("NavAccardeonBtn-logout-sub-menu-dark");
    } else {
      loginBtn.current.classList.remove("NavAccardeonBtn-container-dark");
      logOutSubMenu.current.classList.remove("NavAccardeonBtn-logout-sub-menu-dark");
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
        setUserNameInfo(username)
    }
  }

  function showLogOutMenu() {
    logOutSubMenu.current.style.display = "flex"
    loginBtn.current.style.borderRadius = "5px 5px 0px 0px"
  }
  
  function hideLogOutMenu() {
    logOutSubMenu.current.style.display = "none"
    loginBtn.current.style.borderRadius = "5px"
  }

  function logOutClicked() {
    onLogOut()
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
  } , [usernameInfo])  

  return (
    <div className='NavAccardeonBtn-container' ref={loginBtn} onMouseLeave={hideLogOutMenu}>
        <span className='NavAccardeonBtn-title'>{usernameInfo}</span>
        <ExpandMoreRoundedIcon className='NavAccardeonBtn-chevron' onClick={showLogOutMenu}/>

        <div className='NavAccardeonBtn-logout-sub-menu' ref={logOutSubMenu} onClick={logOutClicked}>
            <span className='NavAccardeonBtn-logout-span'>logOut</span>
            <LogoutRoundedIcon className='NavAccardeonBtn-logout-icon'/>
        </div>
    </div>
  )
}