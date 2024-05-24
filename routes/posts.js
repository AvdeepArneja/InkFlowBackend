import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";



const router = express.Router();
//Router for fetching all posts
router.get("/", getPosts);
router.get("/:id", getPost ) ;//Get a single post with its id
router.post("/", addPost );  //Create a new post
router.delete("/:id", deletePost ) //Delete a specific post using id
router.put("/:id", updatePost );//Update a post 

export default router