import React from 'react'
import './SignInForm.css'
import { useState , useEffect , useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignInForm({ onShowModal , onSignUp}) {
  const[userNameInput , setUserNameInput] = useState("")
  const[passwordInput , setPasswordInput] = useState("")  
  
  let usernameAlert = useRef()
  let passwordAlert = useRef()
  let signInContainer = useRef()
  let signInTitle = useRef()
  let signInUsernameInput = useRef()
  let signInPasswordInput = useRef()
  let signInBtn = useRef()
  let signInNotif = useRef()
  let signInNotifBtn = useRef()

  let navigate = useNavigate()
  
  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        signInContainer.current.classList.add("SignInForm-container-dark");
        signInTitle.current.classList.add("SignInForm-title-dark");
        signInUsernameInput.current.classList.add("SignInForm-input-dark");
        signInPasswordInput.current.classList.add("SignInForm-input-dark");
        signInBtn.current.classList.add("SignInForm-btn-dark");
        signInNotif.current.classList.add("SignInForm-notif-dark");
        signInNotifBtn.current.classList.add("SignInForm-notif-btn-dark");
    } else {
        signInContainer.current.classList.remove("SignInForm-container-dark");
        signInTitle.current.classList.remove("SignInForm-title-dark");
        signInUsernameInput.current.classList.remove("SignInForm-input-dark");
        signInPasswordInput.current.classList.remove("SignInForm-input-dark");
        signInBtn.current.classList.remove("SignInForm-btn-dark");
        signInNotif.current.classList.remove("SignInForm-notif-dark");
        signInNotifBtn.current.classList.remove("SignInForm-notif-btn-dark");
    }
  }

  function navigateToHome() {
    setTimeout(() => {
        navigate('/')
    } , 2000)
  }

  function clearInputs() {
    setUserNameInput("")
    setPasswordInput("")    
  }

  function setCookie() {
    document.cookie = `username=${userNameInput}; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/`;
  }

  function validateInput() {
    if (userNameInput.length < 3 && passwordInput.length >= 8) {
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (passwordInput.length < 8 && userNameInput.length >= 3) {
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (userNameInput.length < 3 && passwordInput.length < 8) {
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (userNameInput.length >= 3 && passwordInput.length >= 8) {
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "hidden"
        setCookie()
        clearInputs()
        onShowModal()
        navigateToHome()
    }
  }

  function navigateToSignUp() {
    onSignUp()
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
    <section className='SignInForm-container' ref={signInContainer}>
        <div className='SignInForm-title' ref={signInTitle}>SignIn</div>
        <input type="text" className='SignInForm-input' placeholder='Username...' value={userNameInput} onChange={(event) => {setUserNameInput(event.target.value)}} ref={signInUsernameInput}/>
        <span className='SignInForm-alert' ref={usernameAlert}>Username must be at least 3 characters!</span>
        <input type="password" className='SignInForm-input' placeholder='Password...' value={passwordInput} onChange={(event) => {setPasswordInput(event.target.value)}} ref={signInPasswordInput}/>
        <span className='SignInForm-alert' ref={passwordAlert}>Password must be at least 8 characters!</span>
        <button className='SignInForm-btn' ref={signInBtn} onClick={validateInput}>signIn</button>
        <span className='SignInForm-notif' ref={signInNotif} onClick={navigateToSignUp}>Don't have an account? <button className='SignInForm-notif-btn' ref={signInNotifBtn}>signUp</button></span>
    </section>
  )
}
