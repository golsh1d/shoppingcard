import React from 'react'
import './ProductsWrapperTopSec.css'
import ProductsAccardeonBtn from '../ProductsAccardeonBtn/ProductsAccardeonBtn'
import ProductsSortBtn from '../ProductsSortBtn/ProductsSortBtn'
import SearchBtn from '../SearchBtn/SearchBtn'

export default function ProductsWrapperTopSec({onAllReorder, onBagsReorder, onShoesReorder, onAccReorder, onBeltReorder, onSortPopularProducts, onSortEarliestProducts, onSortLatestProducts, onSearchInProducts}) {
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

  function sortPopularProducts() {
    onSortPopularProducts()
  }

  function sortEarliestProducts() {
    onSortEarliestProducts()
  }  

  function sortLatestProducts() {
    onSortLatestProducts()
  }

  function searchInProducts(productTitle) {
    onSearchInProducts(productTitle)
  }

  return (
    <div className='ProductsWrapperTopSec-container'>
        <ProductsAccardeonBtn  onAllLi={AllReorder} onBagsLi={BagsReorder} onShoesLi={ShoesReorder} onAccLi={AccReorder} onBeltLi={BeltReorder}/>
        <div className='ProductsWrapperTopSec-right'>
            <ProductsSortBtn onSortPopular={sortPopularProducts} onSortEarliest={sortEarliestProducts} onSortLatest={sortLatestProducts} />
            <SearchBtn onSearch={searchInProducts}/>
        </div>
    </div>
  )
}
