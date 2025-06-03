import express from "express";
import UserRoutes from "./routes/userRoutes.js"
import PostRoutes from "./routes/postRoutes.js"
import CommentRoutes from "./routes/commentRoutes.js"

const router  = express.Router()

router.use('/api',UserRoutes)
router.use('/api',PostRoutes)
router.use('/api',CommentRoutes)

export default router