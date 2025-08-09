import React from 'react'
import './SearchBtn.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useEffect , useRef , useState } from 'react';

export default function SearchBtn({onSearch}) {
  const[searchInputState , setSearchInputState] = useState("")  
  let searchBtn = useRef()
  let searchInput = useRef()

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
        searchBtn.current.classList.add("SearchBtn-container-dark");
        searchInput.current.classList.add("SearchBtn-input-dark");
    } else {
        searchBtn.current.classList.remove("SearchBtn-container-dark");
        searchInput.current.classList.remove("SearchBtn-input-dark");
    }
  }

  function searchIconClicked(searchInputState) {
    onSearch(searchInputState)
    setSearchInputState('')
  }

  function inputClicked(event , searchInputState) {
    if(event.key === "Enter") {
      onSearch(searchInputState)
      setSearchInputState('')
    }
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
    <div className='SearchBtn-container' ref={searchBtn}>
        <input type="text" className='SearchBtn-input' ref={searchInput} value={searchInputState} onChange={(event) => {setSearchInputState(event.target.value)}} onKeyPress={(event) =>inputClicked(event , searchInputState)}/>
        <SearchRoundedIcon className='SearchBtn-icon' onClick={() => searchIconClicked(searchInputState)}/>
    </div>
  )
}
