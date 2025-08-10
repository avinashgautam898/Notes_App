const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const app= express();
const notesRoute=require('./routes/note')
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/notesdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("Mongodb is Connected")
}).catch(()=>{
    console.log("failed to connnect")
})
app.use('/api/notes',notesRoute)

app.listen(5000,()=>{
    console.log("Server is Running")
})