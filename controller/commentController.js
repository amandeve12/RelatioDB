import prisma from "../DB/config.js";

export const fetchComments =async(req,res)=>{
    const comments = await prisma.comment.findMany();
    
    return res.json({status:200, data:comments})
    }

export const createComment =async(req,res)=>  {
    const {user_id,post_id,comment } = req.body;

    // * Increase the comment counter
    await prisma.post.update({
        where :{
            id:Number(post_id)
        },
        data:{
           comment_count:{
            increment:1
           }
        }
    })

    const newComment = await prisma.comment.create({
        data:{
        user_id:Number(user_id),
        post_id:Number(post_id),
     comment
        }
    })

    return res.json({status:200, msg:"comment created", data:newComment})
}

export const getCommentById=async(req,res)=>{
    const commentId = parseInt(req.params.id)
  const comment = await prisma.comment.findFirst({
    where: {
      id: commentId,
    },
  })
  
  if (!comment) {
    return res.status(404).json({ status: 404, message: "comment not found" });
  }
  
  return res.json({status:200, data:comment})
  }

export const deleteComment=async(req,res)=>{
  const commentId = parseInt(req.params.id)
    // * Decrease the comment counter
    await prisma.post.update({
        where :{
            id:Number(post_id)
        },
        data:{
           comment_count:{
            increment:1
           }
        }
    })
await prisma.comment.delete({     
  where:{
    id:commentId
  }
})

return res.json({status:200, msg:"post deleted successfully"})
}
