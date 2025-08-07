import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import CardWrapper from '../../components/CardWrapper/CardWrapper'

export default function Home() {
  return (
    <>
      <Nav />
      <div className='Home-main-container'>
        <CardWrapper />
      </div>
    </>
  )
}
