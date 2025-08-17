import React from 'react'
import './DownLoadBtn.css'
import { useEffect , useRef , useState} from 'react';
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import autoTable from 'jspdf-autotable';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

export default function DownLoadBtn({ totalPrice }) {
  const [price , setPrice] = useState(null)
  let downloadBtn = useRef()

  function getLocalStorage() {
      let webAppereance = localStorage.getItem("mode");
      if (webAppereance === "dark") {
          downloadBtn.current.classList.add("DownLoadBtn-container-dark");
      } else {
          downloadBtn.current.classList.remove("DownLoadBtn-container-dark");
  }}

  function downLoadPDF() {
    let localStorageArray = JSON.parse(localStorage.getItem('productInfo')) || []

    if (localStorageArray.length > 0) {
      const doc = new jsPDF()
      let count = 0

      doc.setFontSize(16)
      doc.text("shopping card", 14, 15)


      const tableData = localStorageArray.map(obj => [
        obj.productTitle,
        obj.productPrice,
        obj.productSelectedCount
      ])

      autoTable(doc, {
        head: [["Title" , "Price" , "Count"]] , 
        body: tableData,
        startY: 25
      })

      const finalY = doc.lastAutoTable.finalY || 25
      doc.setFontSize(14)
      doc.text(`Total price : ${price}`, 14, finalY + 10)

      doc.save("shopping-card.pdf")
    }
  }
            
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

  useEffect(() => {
    setPrice(totalPrice)
  } , [totalPrice])

  return (
    <button className='DownLoadBtn-container' ref={downloadBtn} onClick={downLoadPDF}>
        <span className='DownLoadBtn-span'>Download As PDF</span>
        <CloudDownloadRoundedIcon className='DownLoadBtn-icon'/>
    </button>
  )
}
