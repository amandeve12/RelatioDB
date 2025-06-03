import prisma from "../DB/config.js";

export const createUser=async(req,res)=>{
    const {name, email, password} = req.body;

    const findUser = await prisma.user.findUnique({
      where :{
        email:email
      }  

    });

    if(findUser){
        return res.json({status:400, message:"Email already taken."})
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }

    })

    return res.json({status:200, msg:"User created"})
}


export const updateUser=async(req,res)=>{
  const userId = req.params.id

  const {name, email, password} = req.body;

  await prisma.user.update({
    where:{
      id:Number(userId)
    },
    data:{
      name:name,
      email:email,
      password:password 
    }
  })


  return res.json({status:200, msg:"user updated successfully"})
}

export const fetchUser=async(req,res)=>{
const users = await prisma.user.findMany({
  include:{
    post: {
      select:{title:true,comment:true,description:true,id:true}
    }
  }
})

return res.json({status:200, data:users})
}

export const deleteUserById=async(req,res)=>{
  const userId = parseInt(req.params.id)

const users = await prisma.user.delete({     
  where:{
    id:userId
  }
})

return res.json({status:200, data:users})
}

export const getUserById=async(req,res)=>{
  const userId = parseInt(req.params.id)
const user = await prisma.user.findMany({
  where: {
    id: userId,
  },
})

if (!user) {
  return res.status(404).json({ status: 404, message: "User not found" });
}

return res.json({status:200, msg:"user deleted successfully"})
}


