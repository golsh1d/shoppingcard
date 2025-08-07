import React from 'react'
import './ProductsWrapperTopSec.css'
import ProductsAccardeonBtn from '../ProductsAccardeonBtn/ProductsAccardeonBtn'
import ProductsSortBtn from '../ProductsSortBtn/ProductsSortBtn'
import SearchBtn from '../SearchBtn/SearchBtn'

export default function ProductsWrapperTopSec() {
  return (
    <div className='ProductsWrapperTopSec-container'>
        <ProductsAccardeonBtn />
        <div className='ProductsWrapperTopSec-right'>
            <ProductsSortBtn />
            <SearchBtn />
        </div>
    </div>
  )
}
