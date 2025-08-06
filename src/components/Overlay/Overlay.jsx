import React from 'react'
import './Overlay.css'

export default function Overlay({ styleProp , onOverlay}) {
  function closeEveryThing() {
    onOverlay()
  }  

  return (
    <div className='Overlay-container' style={{ ...styleProp }} onClick={closeEveryThing}></div>
  )
}
