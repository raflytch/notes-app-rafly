import React from "react";
import { getInitialData as fetchInitialData } from "../utils/index";
import CustomNavBar from "./CustomNavBar";
import CustomNotesAdd from "./CustomNotesAdd";
import CustomNotesList from "./CustomNotesList";

class CustomNotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: fetchInitialData(),
      searchText: "",
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddNotes = this.handleAddNotes.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
  }

  handleSearchChange(searchText) {
    this.setState({ searchText });
  }

  handleAddNotes({ title, body }) {
    this.setState((prevState) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      const updatedNotes = [...prevState.notes, newNote];
      return { notes: updatedNotes };
    });
  }

  handleDelete(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  }

  handleArchive(id) {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: updatedNotes });
  }

  render() {
    return (
      <div className="custom-notes-app">
        <CustomNavBar
          searchText={this.state.searchText}
          onSearchChange={this.handleSearchChange}
        />
        <CustomNotesAdd addNotes={this.handleAddNotes} />
        <div className="custom-note-app-body">
          <h2>Catatan Aktif</h2>
          <CustomNotesList
            notes={this.state.notes.filter(
              (note) =>
                note.title
                  .toLowerCase()
                  .includes(this.state.searchText.toLowerCase()) &&
                !note.archived
            )}
            onDelete={this.handleDelete}
            onArchive={this.handleArchive}
          />
          <h2>Catatan Diarsipkan</h2>
          <CustomNotesList
            notes={this.state.notes.filter(
              (note) =>
                note.title
                  .toLowerCase()
                  .includes(this.state.searchText.toLowerCase()) &&
                note.archived
            )}
            onDelete={this.handleDelete}
            onArchive={this.handleArchive}
          />
        </div>
      </div>
    );
  }
}

export default CustomNotesApp;
