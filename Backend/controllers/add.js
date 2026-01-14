const fs = require("fs").promises;
const path = require ("path");


async function addRepo(filePath){
const repoPath = path.resolve(process.cwd(), ".myGit");
const stagingPath = path.join(repoPath, "staging");

try {
    await fs.mkdir(stagingPath , { recursive: true });
    // Logic to add files to staging area would go here
    const fileName = path.basename(filePath);
    await fs.copyFile(filePath, path.join(stagingPath, fileName));
    console.log(`Added ${fileName} to staging area.`);
    
} catch (error) {
    console.error("Error adding files to staging:", error);
    
}

   // console.log("Add command called");
}
module.exports = { addRepo };