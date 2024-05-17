import React from "react";

class CustomNotesAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      length: 0,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    const title = event.target.value;
    const length = title.length;

    this.setState({ title, length });

    if (length >= 50) {
      alert("Jumlah Judul Maksimal 50");
      this.setState({ title: "", length: 0 });
    }
  }

  onBodyChange(event) {
    const body = event.target.value;
    this.setState({ body });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState({ title: "", body: "", length: 0 });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Tambahkan Catatan</h2>
        <p className="note-input_title_char-limit">
          Maksimal Judul: {this.state.length}/50
        </p>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Catatan...."
          value={this.state.body}
          onChange={this.onBodyChange}
        ></textarea>
        <button onClick={this.onSubmit}>Tambahkan</button>
      </div>
    );
  }
}

export default CustomNotesAdd;
