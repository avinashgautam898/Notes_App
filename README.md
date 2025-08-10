# 📝 Notes App (MERN Stack)

A simple and user-friendly Notes application built with **React**, **Node.js**, **Express**, and **MongoDB**.  
You can **add, edit, update, and delete notes** with real-time updates from the database.

---

## 🚀 Features
- ➕ Add new notes
- ✏️ Edit existing notes
- 🔄 Update notes in real-time
- ❌ Delete notes
- 📦 Persistent storage using MongoDB
- 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Axios
- CSS

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose

---

## 📂 Project Structure
notes-app/
│
├── backend/ # Express + MongoDB API
│ ├── server.js
│ ├── models/
│ ├── routes/
│ └── controllers/
│
├── frontend/ # React App
│ ├── src/
│ │ ├── components/
│ │ │ ├── NoteForm.jsx
│ │ │ ├── NoteList.jsx
│ │ └── App.jsx
│ └── public/
│
└── README.md

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/avinashgautamn898/notes-app.git
cd notes-app
---
npm install
MONGO_URI=your_mongodb_connection_string
PORT=5000
npm start
