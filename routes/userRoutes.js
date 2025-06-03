import express from "express";
import { createUser, deleteUserById, fetchUser, getUserById, updateUser } from "../controller/userController.js";

const router = express.Router()

router.post('/user/register',createUser)
router.put('/user/:id',updateUser)
router.get('/user',fetchUser)
router.get('/user/:id',getUserById)
router.delete('/user/:id',deleteUserById)


export default router;

