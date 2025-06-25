/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Daftarcatatan from "./Daftarcatatan";
import Arsipcatatan from "./Arsipcatatan";

function NoteList({
  notes,
  onDelete,
  onArchive,
  noArchive,
  find,
  searchQuery,
  handleSearchChange,

}) {
  // Pisahkan catatan aktif dan arsip
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="boxlist">
      <div className="find">
        <input
          type="text"
          placeholder="cari judul"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={find}>cari</button>
      </div>
      <h2>Daftar Catatan</h2>
      {activeNotes.length === 0 ? (
        <p className="ex">Tidak ada catatan aktif</p>
      ) : (
        <Daftarcatatan
          notes={activeNotes}
          onArchive={onArchive}
          onDelete={onDelete}
          
        />
      )}

      <h2>Daftar Arsip</h2>
      {archivedNotes.length === 0 ? (
        <p className="ex">Tidak ada catatan arsip</p>
      ) : (
        <Arsipcatatan
          notes={archivedNotes}
          noArchive={noArchive}
          onDelete={onDelete}
       
        />
      )}
    </div>
  );
}

export default NoteList;
