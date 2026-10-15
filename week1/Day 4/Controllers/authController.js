const User=require('../Models/User')
const signup=async(req,res)=>{
 try{
 const {username,password}=req.body
 if(!username || !password){
    return res.status(400).json({message:"username and password required"})
 }

 const existingUser=await User.findOne({username})
 if(existingUser){
    return res.status(400).json({message:"user already exist"})
 }
await User.create({
    username,
    password
})

res.status(201).json({message:"User created successfully"})

 }catch(error){
    console.error(error)
    res.status(500).json({message:'server error'})
 }

}

const login=async(req,res)=>{
   try{
      const{username,password}=req.body
      if(!username || !password){
    return res.status(400).json({message:"username and password required"})
 }
      const user=await User.findOne({username})
      if(!user){
         return res.status(401).json({message:"invalid username or password"})
      }
      if(user.password!==password){
                  return res.status(401).json({message:"invalid username or password"})

      }

      res.status(200).json({message:"login succcessfull"})
   }catch(error){
    console.error(error)
    res.status(500).json({message:'server error'})
   }
}

module.exports={
    signup,login
}