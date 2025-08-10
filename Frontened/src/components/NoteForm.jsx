import React, { useState, useEffect } from "react";

const NoteForm = ({ addNote, editNote, updateNote }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (editNote) {
      setNote(editNote);
    }
  }, [editNote]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editNote) {
      updateNote(editNote._id, note);
    } else {
      addNote(note);
    }
    setNote({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Enter content"
        value={note.content}
        onChange={handleChange}
        required
      />
      <button type="submit">{editNote ? "Update" : "Add"} Note</button>
    </form>
  );
};

export default NoteForm;