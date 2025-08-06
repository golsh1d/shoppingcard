import React, { useEffect, useState } from 'react'
import './SigningModal.css'

export default function SigningModal() {
  const[modalContent , setModalContent] = useState("")

  function getCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0 ; i < cookies.length ; i++) {
        const c = cookies[i].trim();
        if (c.startsWith(name + '=')) {
            return c.substring(name.length + 1)
        }
    }
  }
  
  useEffect(() => {
    const username = getCookie('username')

    if(username) {
        setModalContent(username)
    }
  } , [])

  return (
    <div className='SigningModal-container'>Welcome, {modalContent}!</div>
  )
}
