/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Buttonarsip from "./Buttonarsip";

function Arsipcatatan({ notes, onDelete, noArchive }) {
  return (
    <div className="boxcatatan">
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <div key={note.id} className="catatan">
            <h3>{note.title}</h3>
            <small>{new Date(note.createdAt).toLocaleString()}</small>
            <p>{note.body}</p>
            <Buttonarsip
              title={note.title}
              onDelete={onDelete}
              noArchive={noArchive}
            />
          </div>
        ))}
    </div>
  );
}
export default Arsipcatatan;
