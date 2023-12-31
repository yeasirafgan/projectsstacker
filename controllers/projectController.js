
const Project = require('../models/projectModel');
const mongoose = require('mongoose');

// get all project
const getAllProjects = async (req,res)=> {
  const projects = await Project.find({})
  res.status(200).json(projects)
}

// get a single project
const getSingleProject = async (req,res)=> {
  const{id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Invalid Id"})
  }
  const  project = await Project.findById(id);

  if(!project){
    return res.status(404).json({error: "No project found!"})
  }
  res.status(200).json(project)
}



// post a project
const postProject = async (req,res)=>{
  const data = req.body;
  try {
    const project = await Project.create({
      ...data,
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// update project
const updateProject = async (req,res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "Invalid id"})
  }
  const project = await Project.findOneAndUpdate({_id: id},{...req.body})
  if(!project){
    return res.status(400).json({error: "No project found!"})
  }
  res.status(200).json(project);

}



// delete project
const deleteProject = async (req,res)=>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "Invalid id"})
  }
  const project = await Project.findOneAndDelete({_id: id})
  if(!project){
    return res.status(400).json({error: "No project found!"})
  }
  res.status(200).json(project);

}

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject
}