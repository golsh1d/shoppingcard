import React from 'react'
import './CategorizeBtn.css'
import { useEffect , useRef , useState} from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function CategorizeBtn({onAllLi, onBagsLi, onShoesLi, onAccLi, onBeltLi}) {
  let categorizeBtn = useRef()  
  let categorizeSubMenu = useRef()  

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      categorizeBtn.current.classList.add("CategorizeBtn-container-dark");
      categorizeSubMenu.current.classList.add("CategorizeBtn-sub-menu-dark");
    } else {
      categorizeBtn.current.classList.remove("CategorizeBtn-container-dark");
      categorizeSubMenu.current.classList.remove("CategorizeBtn-sub-menu-dark");
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
    <div className='CategorizeBtn-container' ref={categorizeBtn} onMouseLeave={hideSubMenu}>
        <span className='CategorizeBtn-title'>Categorize</span>
        <ExpandMoreRoundedIcon className='CategorizeBtn-chevron' onClick={showSubMenu}/>

        <ul className='CategorizeBtn-sub-menu' ref={categorizeSubMenu}>
            <li className='CategorizeBtn-li' onClick={AllLiClicked}>
                <span className='CategorizeBtn-span'>All</span>
            </li>
            <li className='CategorizeBtn-li' onClick={BagsLiClicked}>
                <span className='CategorizeBtn-span'>Bags</span>
            </li>
            <li className='CategorizeBtn-li' onClick={ShoesLiClicked}>
                <span className='CategorizeBtn-span'>Shoes</span>
            </li>
            <li className='CategorizeBtn-li' onClick={AccLiClicked}>
                <span className='CategorizeBtn-span'>Accessories</span>
            </li>
            <li className='CategorizeBtn-li' onClick={BeltLiClicked}>
                <span className='CategorizeBtn-span'>Belts</span>
            </li>
        </ul>
    </div>
  )
}