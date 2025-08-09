import React from 'react'
import './ProductsWrapperTopSec.css'
import ProductsAccardeonBtn from '../ProductsAccardeonBtn/ProductsAccardeonBtn'
import ProductsSortBtn from '../ProductsSortBtn/ProductsSortBtn'
import SearchBtn from '../SearchBtn/SearchBtn'

export default function ProductsWrapperTopSec({onAllReorder, onBagsReorder, onShoesReorder, onAccReorder, onBeltReorder}) {
  function AllReorder() {
    onAllReorder()
  }

  function BagsReorder() {
    onBagsReorder()
  }

  function ShoesReorder() {
    onShoesReorder()    
  }

  function AccReorder() {
    onAccReorder()
  }

  function BeltReorder() {
    onBeltReorder()
  }

  return (
    <div className='ProductsWrapperTopSec-container'>
        <ProductsAccardeonBtn  onAllLi={AllReorder} onBagsLi={BagsReorder} onShoesLi={ShoesReorder} onAccLi={AccReorder} onBeltLi={BeltReorder}/>
        <div className='ProductsWrapperTopSec-right'>
            <ProductsSortBtn />
            <SearchBtn />
        </div>
    </div>
  )
}
