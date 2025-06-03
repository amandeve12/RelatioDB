import prisma from "../DB/config.js";

export const createPost =async(req,res)=>  {
    const {user_id,title,description } = req.body;

    const newPost = await prisma.post.create({
        data:{
        user_id:Number(user_id),
        title,
        description 
        } 
    })

    return res.json({status:200, msg:"Post created", data:newPost})
}

export const updatePost=async(req,res)=>{
  const postId = req.params.id

    const {user_id,title,description } = req.body;


  await prisma.user.update({
    where:{
      id:Number(postId)
    },
    data:{
        user_id:Number(user_id),
        title,
        description 
           }
  })


  return res.json({status:200, msg:"user updated successfully"})
}

export const fetchPost=async(req,res)=>{
const posts = await prisma.post.findMany({
    include:{
        comment:{
    include:{
    user:{
        select:{
          name:true,
          email:true
        
        }
    }    
    }        
        }
    },
    orderBy:{
      id:"desc"
    }
});

return res.json({status:200, data:posts})
}

export const deletePostById=async(req,res)=>{
  const postId = parseInt(req.params.id)

await prisma.post.delete({     
  where:{
    id:postId
  }
})

return res.json({status:200, msg:"post deleted successfully"})
}

export const getPostById=async(req,res)=>{
  const postId = parseInt(req.params.id)
const post = await prisma.post.findFirst({
  where: {
    id: postId,
  },
})

if (!post) {
  return res.status(404).json({ status: 404, message: "post not found" });
}

return res.json({status:200, data:post})
}