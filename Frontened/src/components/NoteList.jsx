import React from "react";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.length === 0 && <p>No notes yet!</p>}
      {notes.map((note) => (
        <div key={note._id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)}>✏ Edit</button>
          <button onClick={() => onDelete(note._id)}>🗑 Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;