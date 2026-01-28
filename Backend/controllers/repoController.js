const mongoose = require('mongoose');
const Repository = require('../models/repoModel');
const User = require('../models/userModel');
const Issue = require('../models/issueModel');


async function createRepository (req, res) {
    const { owner, name, issues, content, description, visibility } = req.body;
    
    try {
        if(!name){
        return res.status(400).json("Repository name is required!");

    }
    if(!mongoose.Types.ObjectId.isValid(owner)){
        return res.status(400).json({ error: "Invalid User ID!" });
    }
    const newRepository = new Repository({
        name,
        description,
        visibility,
        owner,
        content,
        issues
    });

    const result = await newRepository.save();
    res.status(201).json({message: "Repository created successfully!", repositoryID: result._id}); 
       
    } catch(error) {

        console.error("Error during repository creation:", error.message);
        res.status(500).json("Server error!");
    }
};

async function getAllRepositories (req, res) {
    res.send("All Repositories feteched");
};

async function fetchRepositoryById (req, res) {
    res.send("Repository Details fetched by ID");
};

async function fetchRepositoryByName(req, res) {
    res.send("Repository Details fetched by Name");
};

async function fetchRepositoryForCurrentUser (req, res) {
    res.send("Repository fetched for current Logged in user");
};

async function updateRepositoryById (req, res) {
    res.send("Repository Updated!!");
};

async function toggleVisibilityById (req, res) {
    res.send("Visibility Toggled!!");
};

async function deleteRepositoryById (req, res) {
    res.send("Repository deleted!!");
};

module.exports =  {
    createRepository,
    getAllRepositories,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoryForCurrentUser,
    updateRepositoryById,
    toggleVisibilityById,
    deleteRepositoryById
};
