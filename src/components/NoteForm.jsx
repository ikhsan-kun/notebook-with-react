/* eslint-disable react/prop-types */
 
import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEvent(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" }); 
  }

  render() {
    return (
      <div id="boxform">
        <h3>Buat catatan anda</h3>
        <form onSubmit={this.onSubmitEvent}>
          <input
            type="text"
            name="judul"
            id="judul"
            placeholder="masukkan judul"
            value={this.state.title}
            onChange={this.onTitleChange}
            required
          />
          <textarea
            name="body"
            id="body"
            placeholder="masukkan isi catatan anda"
            value={this.state.body}
            onChange={this.onBodyChange}
            required
          ></textarea>
          <button type="submit" className="button">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
