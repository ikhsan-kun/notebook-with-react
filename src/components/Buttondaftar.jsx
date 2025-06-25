/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Buttondaftar({title, onDelete, onArchive}){
   return(
    <div className="buttonbox">
        <button className="delete" onClick={() => onDelete(title)}>Hapus Catatan</button>
        <button className="arsip" onClick={()=> onArchive(title)}>Arsipkan</button>
    </div>
   ) 
}
export default Buttondaftar;