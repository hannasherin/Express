import express from 'express'
const app=express()
const PORT=3000


const students=[
    {id:1,name:'Hanna',course:'MERN'},
    {id:2,name:'Lamiha',course:'PYTHON'},
    {id:3,name:'Nisha',course:'DA'}
]

app.use(express.json())

app.get('/students',(req,res)=>{
   res.status(200).json(students)
})

app.post('/students',(req,res)=>{
  const {name,course}=req.body
  const newUser={
    id:students.length+1,
    name,
    course
  }
  students.push(newUser)
  res.status(200).json({message:"students added sucessfully",students})

})

app.get("/students/:id",(req,res)=>{
    const id=Number (req.params.id)
    const student=students.find((std)=>std.id===id)
    res.status(200).json(student)
})
app.put('/students/:id',(req,res)=>{
    const id=Number(req.params.id)
    const {name,course}=req.body
    const index=students.findIndex((std)=>std.id===id)
    if(index===-1){
        return res.status(404).json({message:'students not found'})
    } 

    students[index]={
        id,
        name,
        course
    }

    res.status(200).json({message:"students updates",students})

})

app.delete('/students/:id',(req,res)=>{
    const id=Number(req.params.id)
    
    const index=students.findIndex((std)=>std.id===id)
    if(index===-1){
        students.splice(index,1)
         res.status(200).json({message:"Deleted",students})
    }
})

app.patch('/students/:id',(req,res)=>{
    const id=Number(req.params.id)
    const updates=req.body
    const index=students.findIndex((std)=>std.id===id)
    if(index===-1){
        
         res.status(404).json({message:"not Found",students})
    }

    students[index]={
        ...students[index],
        ...updates
    }
})


app.listen(PORT,()=>console.log('Server Running'))