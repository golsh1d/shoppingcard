import React from 'react'
import './DownLoadBtn.css'
import { useEffect , useRef } from 'react';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

export default function DownLoadBtn() {
  let downloadBtn = useRef()

  function getLocalStorage() {
      let webAppereance = localStorage.getItem("mode");
      if (webAppereance === "dark") {
          downloadBtn.current.classList.add("DownLoadBtn-container-dark");
      } else {
          downloadBtn.current.classList.remove("DownLoadBtn-container-dark");
  }}
            
  useEffect(() => {
    const handleStorageUpdate = () => {
        getLocalStorage();
    };
            
    getLocalStorage();
            
    window.addEventListener("lsUpdated", handleStorageUpdate);
            
    return () => {
        window.removeEventListener("lsUpdated", handleStorageUpdate);
    };
  }, []); 

  return (
    <button className='DownLoadBtn-container' ref={downloadBtn}>
        <span className='DownLoadBtn-span'>Download As PDF</span>
        <CloudDownloadRoundedIcon className='DownLoadBtn-icon'/>
    </button>
  )
}
