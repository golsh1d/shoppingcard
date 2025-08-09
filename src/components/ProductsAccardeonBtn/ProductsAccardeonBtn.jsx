import React from 'react'
import './ProductsAccardeonBtn.css'
import { useEffect , useRef , useState} from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function ProductsAccardeonBtn({onAllLi, onBagsLi, onShoesLi, onAccLi, onBeltLi}) {
  let categorizeBtn = useRef()  
  let categorizeSubMenu = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      categorizeBtn.current.classList.add("ProductsAccardeonBtn-container-dark");
      categorizeSubMenu.current.classList.add("ProductsAccardeonBtn-sub-menu-dark");
    } else {
      categorizeBtn.current.classList.remove("ProductsAccardeonBtn-container-dark");
      categorizeSubMenu.current.classList.remove("ProductsAccardeonBtn-sub-menu-dark");
    }
  }   

  function showSubMenu() {
    categorizeSubMenu.current.style.display = "block"
    categorizeBtn.current.style.borderRadius = "5px 5px 0px 0px"
  }
  
  function hideSubMenu() {
    categorizeSubMenu.current.style.display = "none"
    categorizeBtn.current.style.borderRadius = "5px"
  }

  function AllLiClicked() {
    onAllLi()
  }

  function BagsLiClicked() {
    onBagsLi()
  }

  function ShoesLiClicked() {
    onShoesLi()
  }

  function AccLiClicked() {
    onAccLi()
  }

  function BeltLiClicked() {
    onBeltLi()
  }


  useEffect(() => {
    const handleStorageUpdate = () => {
        getLocalStorage()
    }
    getLocalStorage()
    window.addEventListener("lsUpdated" , handleStorageUpdate)
        
    return () => {
        window.removeEventListener("lsUpdated" , handleStorageUpdate)
    }
  } , [])  

  return (
    <div className='ProductsAccardeonBtn-container' ref={categorizeBtn} onMouseLeave={hideSubMenu}>
        <span className='ProductsAccardeonBtn-title'>Categorize</span>
        <ExpandMoreRoundedIcon className='ProductsAccardeonBtn-chevron' onClick={showSubMenu}/>

        <ul className='ProductsAccardeonBtn-sub-menu' ref={categorizeSubMenu}>
            <li className='ProductsAccardeonBtn-li' onClick={AllLiClicked}>
                <span className='ProductsAccardeonBtn-span'>All</span>
            </li>
            <li className='ProductsAccardeonBtn-li' onClick={BagsLiClicked}>
                <span className='ProductsAccardeonBtn-span'>Bags</span>
            </li>
            <li className='ProductsAccardeonBtn-li' onClick={ShoesLiClicked}>
                <span className='ProductsAccardeonBtn-span'>Shoes</span>
            </li>
            <li className='ProductsAccardeonBtn-li' onClick={AccLiClicked}>
                <span className='ProductsAccardeonBtn-span'>Accessories</span>
            </li>
            <li className='ProductsAccardeonBtn-li' onClick={BeltLiClicked}>
                <span className='ProductsAccardeonBtn-span'>Belts</span>
            </li>
        </ul>
    </div>
  )
}