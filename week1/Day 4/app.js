const express=require('express')
const connectDb=require('./Config/db')
const userRouter=require('./Routes/userRoutes')
const authRouter=require('./Routes/authRoutes')
const PORT=3001
const app=express()
connectDb()
app.use(express.json())

app.use('/user',userRouter)
app.use('/auth',authRouter)


app.listen(PORT,()=>console.log("Server Running..."))
