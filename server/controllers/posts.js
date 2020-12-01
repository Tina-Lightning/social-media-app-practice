import PostMessage from "../models/postMessage.js";

// this is where the functions for the routes are 

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = (req, res) => {
    res.send("post creation");
};