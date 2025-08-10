const express=require('express');
const router=express.Router();
const Note=require('../models/Note');

router.post('/',async(req, res)=>{
    try{
        const {title,content}=req.body;
        const newNote=new Note({title,content});
        const savedNote=await newNote.save();
        res.status(201).json(savedNote);
    } catch(eror){
        res.status(500).json({eror:'failed to create note'})
    }
})
router.get('/',async(req, res)=>{
    try{
        const Notes=await Note.find();
        res.status(201).json(Notes);
    } catch(eror){
        res.status(500).json({eror:'failed to create note'})
    }
})


router.get('/:id',async (req,res)=>{
    try{
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json({eror:'note not found'})
            res.json(note);         
    } catch(eror){
        res.status(500).json({eror:'failed to fetch'})
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const {title,content}=req.body;
        const updateNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updateNote) return res.status(404).json({eror:'Note not Found'})
            res.json(updateNote)
            
    } catch(eror){
        res.status(500).json({eror:'failed to update'})
    }
})
router.delete('/:id', async (req,res)=>{
    try{
        const deleteNote=await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.status(404).json({eror:'Not Found'})
            res.json({message:'Notes deleted Succesfully'})
    } catch(eror){
        res.status(500).json({eror:'failed to delete'})
    }
})
module.exports=router;