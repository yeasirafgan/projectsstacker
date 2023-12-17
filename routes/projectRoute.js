const express = require('express');

// router
const router = express.Router();

// routes
router.get('/', (req,res)=>{
  res.json({message: "Get all projects"})
});
router.get('/:id', (req,res)=>{
  res.json({message: "Get a single project"})
})
router.post('/', (req,res)=>{
  res.json({message: "Post a project"})
})
router.patch('/:id', (req,res)=>{
  res.json({message: "Update a project (patch)"})
})
router.delete('/:id', (req,res)=>{
  res.json({message: "Delete a project"})
})









module.exports = router;
