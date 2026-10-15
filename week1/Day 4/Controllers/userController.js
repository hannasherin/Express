const getProfile=(req,res)=>{
    res.send('profile page accessed')

}


const registerUser=(req,res)=>{
    res.status(200).json({message:"User registered successfully"})
}


module.exports={
    getProfile,registerUser
}