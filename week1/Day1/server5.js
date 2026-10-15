const express=require('express')
const app=express()
const PORT=3000

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.send(` 
    <h1>User Form</h1>
<form action="/login" method="POST">
    <input type="text" placeholder="Enter Name" name="username" required>
    <br> <br>
    <input type="email" placeholder="Enter Your Email" name="email" required>
    <br> <br>
    <button type="submit">Submit</button>
</form>`)
})

app.post('/login',(req,res)=>{
    const {username,email}=req.body
     res.send(`<h1>${username} we got your email ${email}</h1>`)
})


app.listen(PORT,()=>console.log('Server Running'))