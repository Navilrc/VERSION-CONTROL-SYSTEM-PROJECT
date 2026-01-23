const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); //to allow cross origin requests
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const http = require("http");
const { Server } = require("socket.io");


const yargs = require('yargs');
const {hideBin} = require("yargs/helpers"); //helps in to read arguement attached with command

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

dotenv.config(); // Load environment variables from .env file

yargs(hideBin(process.argv))
    .command(
         "start",
         "Start a new Server",
         {},
         () => {
         startServer();
        }
    )

    .command("init","Initialise a new repository",{},initRepo)
    .command(
        "add <file>",
        "Add a new repository",
        (yargs) => {
        yargs.positional("file",{
            describe: "File to add to the staging area",
            type:"string",
            });
        },
        (argv) => {
            addRepo(argv.file);
        }
    )
    .command(
        "commit <message>",
        "Commit the staged files",
        (yargs) => {
            yargs.positional("message", {
            describe : "Commit message",
            type: "string",
            });
        },
        (argv) => {
            commitRepo(argv.message);
        }
    )
    .command("push","Push the committed changes to remote repository(to S3)",{},pushRepo)
    .command("pull","Pull the committed changes from remote repository(from S3)",{},pullRepo)
    .command(
        "revert <commitId>",
        "Revert the Specific commit",
        (yargs) => {
            yargs.positional("commitID",{ 
                describe: "Commit ID to revert to",
                type:"string",
            });
        },
        (argv) => {
            revertRepo(argv.commitId);
        }
    )

    .demandCommand(1,"You need at least one command").help().argv;

// hideBin helps to ignore first two default arguments provided by node
// process.argv is an array that contains command line arguments passed when the Node.js process was launched.
function startServer() {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(bodyParser.json());
    app.use(express.json());

    const mongoURI = process.env.MONGODB_URI;

    mongoose
        .connect(mongoURI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Error connecting to MongoDB:", err));

    app.use(cors({ origin: "*" })); // Allow requests from any origin

    app.get("/", (req, res) => {
        res.send("Welcome!");
    });

    let user = "test";
    const  httpServer = http.createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

     io.on("connection", (socket) => {
       socket.on("joinRoom", (userId) => {
            user = userId;
            console.log("=====") 
            console.log(user);
            console.log("=====");
            socket.join(userId);
        });
    });

    const db = mongoose.connection;

    db.once("open", async () => {
        console.log("CRUD operations called");
        // You can set up your CRUD routes here
    });

    httpServer.listen(port,() => {
        console.log(`Server running on PORT ${port}`);
    });
    
}