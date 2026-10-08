const express=require('express')
const app=express()
const PORT=3000

app.get('/',(req,res)=>{
  res.send('<h1 > Welcome to Express</h1>')
})
app.get('/about',(req,res)=>{
  res.send(`<h1 > About Page</h1>
    <p>A paragraph is a distinct unit of writing consisting of one or more sentences that focus on a single central idea, theme, or speaker.</p>`)
})
app.get('/contact',(req,res)=>{
  res.send(`<h1 > Contact page</h1>
    <p>Email: hannasherinpp2000@gmail.com</p>`)
})

app.get('/service',(req,res)=>{
   res.send(`<h1>Service Page</h1>
    <br>
    <ul>
    <li>Backend Developer</li>
    <li>FrontEnd Developer</li>
    <li>Full Stack Developer</li>
    </ul>`)
})

app.listen(PORT,()=>console.log('server running'))