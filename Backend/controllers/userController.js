
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb"); 
const dotenv = require("dotenv");
const { connect } = require("../routes/user.router");

dotenv.config();
const uri = process.env.MONGODB_URI;

let client;

async function connectClient() {
    if(!client) {
        
        client = new MongoClient(uri);
        await client.connect();
    }
}

async function signup(req, res) {
    const { username, password, email } = req.body;
    try{
        await connectClient();
        const db = client.db("GitHubClone");
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ username });
        if(user) {
            return res.status(400).json("User already exists");
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            username,
            email,
            password: hashedPassword,
            email,
            repositories : [],
            followedUsers : [],
            starRepos : []
        }

        const result = await usersCollection.insertOne(newUser);

        const token = jwt.sign({ id: result.insertedId }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" 

        });

        res.json({token});
        
    } catch(error) {
        console.error("Error during signup:", error.message);
        res.status(500).json("Server error");
    }
}

async function login (req, res) {
    const { email, password } = req.body;
    try {
        await connectClient();  
        const db = client.db("GitHubClone");
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email });
        if(!user) {
            return res.status(400).json("Invalid credentials");
        }
      
        const isMatch = await bcrypt.compare(password, user.password); 
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        res.json({ token, userId: user._id });

    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json("Server error!");
        
    }
};
const getALLUsers = (req, res) => {
    res.send("Get all users");
};
const getUserProfile = (req, res) => {
    res.send("Get user profile");
};

const updateUserProfile = (req, res) => {
    res.send("Update user profile");
};
const deleteUserProfile = (req, res) => {
    res.send("Delete user profile");
};

module.exports = {
    getALLUsers,
    signup, 
    login,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
}; 