import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import {getInitialData} from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.addNote = this.addNote.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.noArchiveHandler = this.noArchiveHandler.bind(this);
    this.findHandler = this.findHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  onDeleteHandler(title) {
    const notes = this.state.notes.filter((map) => map.title !== title);
    this.setState({ notes });
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  findHandler() {
    const { searchQuery, notes } = this.state;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ notes: filteredNotes });
  }

  noArchiveHandler(title) {
    const notes = this.state.notes.map((note) =>
      note.title === title ? { ...note, archived: false } : note
    );
    this.setState({ notes });
  }

  onArchiveHandler(title) {
    const notes = this.state.notes.map((note) =>
      note.title === title ? { ...note, archived: true } : note
    );
    this.setState({ notes });
  }

  addNote({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  render() {
    return (
      <div id="parentNote">
        <h1>Aplikasi Catatan</h1>
        <NoteForm addNote={this.addNote} />
        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          title={this.state.notes.title}
          onArchive={this.onArchiveHandler}
          noArchive={this.noArchiveHandler}
          find={this.findHandler}
          searchQuery={this.state.searchQuery}
          handleSearchChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default NoteApp;
