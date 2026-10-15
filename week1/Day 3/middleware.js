const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('Middleware exicuted')
    // res.send("responce from middlewARE")
    next()
})

app.get('/',(req,res)=>{
  res.send('Home Page')
})

app.get('/user',(req,res)=>{
    res.send('User Page')
})

app.listen(3001,()=>{console.log("Server Running")})