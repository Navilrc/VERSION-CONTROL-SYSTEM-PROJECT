const yargs = require('yargs');
const {hideBin} = require("yargs/helpers"); //helps in to read arguement attached with command

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
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
