
import React, { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import axios from "axios";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/api/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    await axios.post("http://localhost:5000/api/notes", note);
    fetchNotes();
  };

  const updateNote = async (id, updatedNote) => {
    await axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote);
    setEditNote(null);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    fetchNotes();
  };

  return (
    <div className="container">
      <h1 style={{paddingLeft:'27%'}}>📝 Notes App</h1>
      <NoteForm
        addNote={addNote}
        editNote={editNote}
        updateNote={updateNote}
      />
      <NoteList notes={notes} onEdit={setEditNote} onDelete={deleteNote} />
    </div>
  );
};

export default App;