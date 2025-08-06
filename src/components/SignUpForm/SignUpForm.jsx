import React from 'react'
import './SignUpForm.css'
import { useState , useRef , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUpForm({ onShowModal , onSignIn }) {
  const[nameInput , setNameInput] = useState("")
  const[familyNameInput , setFamilyNameInput] = useState("")
  const[userNameInput , setUserNameInput] = useState("")
  const[passwordInput , setPasswordInput] = useState("")  
    
  let nameAlert = useRef()
  let familyNameAlert = useRef()
  let usernameAlert = useRef()
  let passwordAlert = useRef()
  let signUpContainer = useRef()
  let signUpTitle = useRef()
  let signUpNameInput = useRef()
  let signUpFamilyNameInput = useRef()
  let signUpUsernameInput = useRef()
  let signUpPasswordInput = useRef()
  let signUpBtn = useRef()
  let signUpNotif = useRef()
  let signUpNotifBtn = useRef()  

  let navigate = useNavigate()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        signUpContainer.current.classList.add("SignUpForm-container-dark");
        signUpTitle.current.classList.add("SignUpForm-title-dark");
        signUpNameInput.current.classList.add("SignUpForm-input-dark");
        signUpFamilyNameInput.current.classList.add("SignUpForm-input-dark");
        signUpUsernameInput.current.classList.add("SignUpForm-input-dark");
        signUpPasswordInput.current.classList.add("SignUpForm-input-dark");
        signUpBtn.current.classList.add("SignUpForm-btn-dark");
        signUpNotif.current.classList.add("SignUpForm-notif-dark");
        signUpNotifBtn.current.classList.add("SignUpForm-notif-btn-dark");
    } else {
        signUpContainer.current.classList.remove("SignUpForm-container-dark");
        signUpTitle.current.classList.remove("SignUpForm-title-dark");
        signUpNameInput.current.classList.remove("SignUpForm-input-dark");
        signUpFamilyNameInput.current.classList.remove("SignUpForm-input-dark");
        signUpUsernameInput.current.classList.remove("SignUpForm-input-dark");
        signUpPasswordInput.current.classList.remove("SignUpForm-input-dark");
        signUpBtn.current.classList.remove("SignUpForm-btn-dark");
        signUpNotif.current.classList.remove("SignUpForm-notif-dark");
        signUpNotifBtn.current.classList.remove("SignUpForm-notif-btn-dark");
    }
  }

  function navigateToHome() {
    setTimeout(() => {
        navigate('/')
    } , 2000)
  }

  function clearInputs() {
    setNameInput("")
    setFamilyNameInput("")    
    setUserNameInput("")
    setPasswordInput("")    
  }

  function setCookie() {
    document.cookie = `username=${userNameInput}; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/`;
  }

  function validateInput() {
    if (nameInput.length < 3 && familyNameInput.length >= 3 && userNameInput.length >= 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length >= 3 && familyNameInput.length < 3 && userNameInput.length >= 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length >= 3 && familyNameInput.length >= 3 && userNameInput.length < 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length >= 3 && familyNameInput.length >= 3 && userNameInput.length >= 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "visible"
    }

    else if (nameInput.length >= 3 && familyNameInput.length < 3 && userNameInput.length < 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length >= 3 && familyNameInput.length >= 3 && userNameInput.length < 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (nameInput.length >= 3 && familyNameInput.length < 3 && userNameInput.length >= 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (nameInput.length < 3 && familyNameInput.length >= 3 && userNameInput.length < 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length < 3 && familyNameInput.length < 3 && userNameInput.length >= 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length < 3 && familyNameInput.length >= 3 && userNameInput.length >= 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "visible"
    }

    else if (nameInput.length < 3 && familyNameInput.length < 3 && userNameInput.length < 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "hidden"
    }
    else if (nameInput.length >= 3 && familyNameInput.length < 3 && userNameInput.length < 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (nameInput.length < 3 && familyNameInput.length < 3 && userNameInput.length >= 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (nameInput.length < 3 && familyNameInput.length >= 3 && userNameInput.length < 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "visible"
    }

    else if (nameInput.length < 3 && familyNameInput.length < 3 && userNameInput.length < 3 && passwordInput.length < 8) {
        nameAlert.current.style.visibility = "visible"
        familyNameAlert.current.style.visibility = "visible"
        usernameAlert.current.style.visibility = "visible"
        passwordAlert.current.style.visibility = "visible"
    }
    else if (nameInput.length >= 3 && familyNameInput.length >= 3 && userNameInput.length >= 3 && passwordInput.length >= 8) {
        nameAlert.current.style.visibility = "hidden"
        familyNameAlert.current.style.visibility = "hidden"
        usernameAlert.current.style.visibility = "hidden"
        passwordAlert.current.style.visibility = "hidden"
        setCookie()
        clearInputs()
        onShowModal()
        navigateToHome()
    }
  }

  function navigateToSignIn() {
    onSignIn()
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
    <section className='SignUpForm-container' ref={signUpContainer}>
        <div className='SignUpForm-title' ref={signUpTitle}>signUp</div>
        <input type="text" className='SignUpForm-input' placeholder='Name...' value={nameInput} onChange={(event) => {setNameInput(event.target.value)}} ref={signUpNameInput}/>
        <span className='SignUpForm-alert' ref={nameAlert}>Name must be at least 3 characters!</span>

        <input type="text" className='SignUpForm-input' placeholder='Familyname...' value={familyNameInput} onChange={(event) => {setFamilyNameInput(event.target.value)}} ref={signUpFamilyNameInput}/>
        <span className='SignUpForm-alert' ref={familyNameAlert}>familyname must be at least 3 characters!</span>

        <input type="text" className='SignUpForm-input' placeholder='Username...' value={userNameInput} onChange={(event) => {setUserNameInput(event.target.value)}} ref={signUpUsernameInput}/>
        <span className='SignUpForm-alert' ref={usernameAlert}>Username must be at least 3 characters!</span>

        <input type="password" className='SignUpForm-input' placeholder='Password...' value={passwordInput} onChange={(event) => {setPasswordInput(event.target.value)}} ref={signUpPasswordInput}/>
        <span className='SignUpForm-alert' ref={passwordAlert}>Password must be at least 8 characters!</span>

        <button className='SignUpForm-btn' ref={signUpBtn} onClick={validateInput}>signUp</button>
        <span className='SignUpForm-notif' ref={signUpNotif} onClick={navigateToSignIn}>Already have an account? <button className='SignUpForm-notif-btn' ref={signUpNotifBtn}>signIn</button></span>
    </section>
  )
}
