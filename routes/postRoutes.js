import express from "express";
import { createPost, deletePostById, fetchPost, getPostById, updatePost } from "../controller/postController.js";

const router = express.Router()

router.post('/post',createPost)
router.put('/post/:id',updatePost)
router.get('/post',fetchPost)
router.get('/post/:id',getPostById)
router.delete('/post/:id',deletePostById)


export default router;

