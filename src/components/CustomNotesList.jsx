import React from "react";
import CustomNotesItem from "./CustomNotesItem";

function CustomNotesList({ notes, onDelete, onArchive }) {
  return notes.length !== 0 ? (
    <div className="custom-notes-list">
      {notes.map((note) => (
        <CustomNotesItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          archived={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  ) : (
    <div className="custom-notes-list-empty-message">Tidak Ada Catatan</div>
  );
}

export default CustomNotesList;
