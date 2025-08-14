import React from 'react'
import './DarkOrLightBtn.css'
import { useState , useEffect } from 'react'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

export default function DarkOrLightBtn() {
  const [showDarkIcon , setShowDarkIcon] = useState(null)
  const [showLightIcon , setShowLightIcon] = useState(null)

  useEffect(() => {
    let webAppereance = localStorage.getItem("mode")

    if (webAppereance === "dark") {
        setShowLightIcon(true)
        setShowDarkIcon(false)
    } else {
        setShowDarkIcon(true)
        setShowLightIcon(false)
    }
  } , [])

  function darkIconClicked() {
    localStorage.setItem("mode" , "dark")
    setShowLightIcon(true)
    setShowDarkIcon(false)
    window.dispatchEvent(new Event("lsUpdated"))
  }

  function lightIconClicked() {
    localStorage.setItem("mode" , "light")
    setShowDarkIcon(true)
    setShowLightIcon(false)
    window.dispatchEvent(new Event("lsUpdated"))
  }  

  return (
    <div className='DarkOrLightBtn-container'>
        {showDarkIcon && <DarkModeRoundedIcon className='DarkOrLightBtn-dark-icon' onClick={darkIconClicked}/>}
        {showLightIcon && <LightModeRoundedIcon className='DarkOrLightBtn-light-icon' onClick={lightIconClicked}/>}
    </div>
  )
}
