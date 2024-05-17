import React from "react";
import { showFormattedDate as displayDate } from "../utils";

function CustomNotesItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="custom-note-item">
      <div className="custom-note-item-content">
        <h3 className="custom-note-item-title">{title}</h3>
        <p className="custom-note-item-date">{displayDate(createdAt)}</p>
        <p className="custom-note-item-body">{body}</p>
      </div>
      <div className="custom-note-item-action">
        <button
          className="custom-note-item-delete-button"
          onClick={() => onDelete(id)}
        >
          Hapus
        </button>
        <button
          className="custom-note-item-archive-button"
          onClick={() => onArchive(id)}
        >
          {archived === true ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default CustomNotesItem;
