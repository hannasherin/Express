const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send(`
       <h1>User Form</h1>
<form action="/login" method="POST">
    <input type="text" placeholder="Enter Name" name="userName" required>
    <br>  <br>
    <input type="email" placeholder="Enter Email" name="email" required>
    <br> <br>
    <button type="submit">submit</button>
</form>
    `)
})

app.post('/login',(req,res)=>{
    const {userName,email}=req.body
    res.send(`<h2>${userName} ! We got your Email ${email}</h2>`)

})

app.listen(PORT, () => console.log('server Running'))