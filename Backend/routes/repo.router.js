const express = require("express");

const repoController = require("../controllers/repoController");

const repoRouter = express.Router();

repoRouter.get("/repo/all", repoController.getAllRepositories);
repoRouter.post("/repo/create", repoController.createRepository);
repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
repoRouter.get("/repo/:name", repoController.fetchRepositoryByName);
repoRouter.get("/repo/userID", repoController.fetchRepositoryForCurrentUser);
repoRouter.put("/repo/update/:id", repoController.updateRepositoryById);
repoRouter.patch("/repo/toggle/:id", repoController.toggleVisibilityById);
repoRouter.delete("/repo/delete/:id", repoController.deleteRepositoryById);

module.exports = repoRouter;
userRouter.post("/login", userController.login);
userRouter.get("/userprofile", userController.getUserProfile);
userRouter.put("/updateprofile", userController.updateUserProfile);
userRouter.delete("/deleteprofile", userController.deleteUserProfile);

module.exports = userRouter;