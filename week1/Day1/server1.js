const express=require('express')
const app=express() //its a object

app.get('/',(req,res)=>{
  res.send('express server accessed')
})

app.listen(3000,()=> console.log('server running')
)