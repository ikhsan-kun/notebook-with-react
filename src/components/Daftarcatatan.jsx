/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Buttondaftar from "./Buttondaftar";

function Daftarcatatan({ notes, onDelete, onArchive, }) {
  return (
    <div className="boxcatatan">
      {notes
        .filter((note) => note.archived === false)
        .map((note) => (
          <div key={note.id} className="catatan">
            <h3>{note.title}</h3>
            <small>{new Date(note.createdAt).toLocaleString()}</small>
            <p>{note.body}</p>
            <Buttondaftar
              title={note.title}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          </div>
        ))}
    </div>
  );
}
export default Daftarcatatan;
