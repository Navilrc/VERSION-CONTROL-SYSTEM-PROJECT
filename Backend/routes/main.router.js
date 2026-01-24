const espress = require ('express');
const userRouter = require ('./user.router');
const repoRouter = require ('./repo.router');
const issueRouter = require ('./issue.router');

const mainRouter = espress.Router();

mainRouter.use(userRouter);
mainRouter.use(repoRouter);
mainRouter.use(issueRouter);

mainRouter.get("/", (req, res) => {
    res.send("Welcome to the User Management System");
});

module.exports = mainRouter;