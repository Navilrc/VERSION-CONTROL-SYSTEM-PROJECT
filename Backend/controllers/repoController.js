const createRepository = (req, res) => {
    res.send("Repository created");

};

const getAllRepositories = (req, res) => {
    res.send("All Repositories feteched");
};

const fetchRepositoryById = (req, res) => {
    res.send("Repository Details fetched by ID");
};

const fetchRepositoryByName= (req, res) => {
    res.send("Repository Details fetched by Name");
};

const fetchRepositoryForCurrentUser = (req, res) => {
    res.send("Repository fetched for current Logged in user");
};

const updateRepositoryById = (req, res) => {
    res.send("Repository Updated!!");
};

const toggleVisibilityById = (req, res) => {
    res.send("Visibility Toggled!!");
};

const deleteRepositoryById = (req, res) => {
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