import express from "express";
import { createComment, deleteComment, fetchComments, getCommentById } from "../controller/commentController.js";

const router = express.Router()

router.post('/comment',createComment)
// router.put('/comment/:id',)
router.get('/comment',fetchComments)
router.get('/comment/:id',getCommentById)
router.delete('/comment/:id',deleteComment)


export default router;

