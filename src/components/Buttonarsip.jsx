/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Buttonarsip({title, onDelete, noArchive}){
   return(
    <div className="buttonbox">
        <button className="delete" onClick={() => onDelete(title)}>Hapus Catatan</button>
        <button className="arsip" onClick={()=> noArchive(title)}>jangan Arsip</button>
    </div>
   ) 
}
export default Buttonarsip;