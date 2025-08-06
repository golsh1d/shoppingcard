import React from 'react'
import './Signing.css'
import SignInForm from '../../components/SignInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { useState , useEffect } from 'react'
import SigningModal from '../../components/SigningModal/SigningModal'

export default function Signing() {
  const[showSignIn , setShowSignIn] = useState(null)
  const[showSignUp , setShowSignUp] = useState(null)
  const[showSigningModal , setShowSigningModal] = useState(null)

  useEffect(() => {
    setShowSignIn(true)
    setShowSignUp(false)
  } , [])

  function changeToSignIn() {
    setShowSignIn(true)
    setShowSignUp(false)
  }

  function changeToSignUp() {
    setShowSignIn(false)
    setShowSignUp(true)
  }  

  function showModal() {
    setShowSigningModal(true)
  }

  return (
    <div className='Signing-container'>
      {showSignIn && <SignInForm onSignUp={changeToSignUp} onShowModal={showModal}/>}
      {showSignUp && <SignUpForm onSignIn={changeToSignIn} onShowModal={showModal}/>}
      {showSigningModal && <SigningModal />}
    </div>
  )
}