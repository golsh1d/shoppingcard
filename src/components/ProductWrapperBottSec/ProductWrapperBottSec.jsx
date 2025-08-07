import React from 'react'
import './ProductWrapperBottSec.css'
import RightPagination from '../RightPagination/RightPagination'
import LeftPagination from '../LeftPagination/LeftPagination'

export default function ProductWrapperBottSec() {
  return (
    <div className='ProductWrapperBottSec-container'>
        <div className='ProductWrapperBottSec-btn-wrapper'>
            <LeftPagination />
            <RightPagination />
        </div>
    </div>
  )
}
