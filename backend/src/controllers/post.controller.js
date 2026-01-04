import { Post } from "../models/posts.model.js";

// create a post
const createPost = async (req, res) => {
    try {
        const {name, description, age} = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({message: "All fields are required!"})
        }

        const post = await Post.create({name, description, age})
        res.status(200).json({message: "Post created successfully", post})
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}

const getPost = async (req, res) => {
    try {
        const getPosts = await Post.find()
        return res.status(200).json(getPosts)
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}

const updatePost = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({message: "No data provided for update!"})
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if (!post) {
            return res.status(404).json({message: "Post not found!"})
        }

        return res.status(200).json({
            message: "Post updated successfully!", post
        })
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}

const deletePost = async (req, res) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id)
        if (!deleted) {
            return res.status(404).json({message: "Post not found!"})
        }

        return res.status(200).json({
            message: "Post successfully deleted"
        })
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}

export {
    createPost,
    getPost,
    updatePost,
    deletePost
}