const express=require('express')
const app=express()

const studentmiddleware=(req,res,next)=>{
    console.log('middleware executed')
    next()
    
}

app.get('/student',studentmiddleware,(req,res)=>{
    res.send('student page accessed')
})
app.get('/user',(req,res)=>{
    res.send('user page ')
})
app.use((req,res)=>{
    res.status(404).send('Page Not Found')
})

app.listen(3001,()=>console.log('Server Running'))