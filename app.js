const { urlencoded } = require("express")
const express=require("express")
const app=express()

const people=require('./routes/people')
const login=require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

//Routes
app.use('/api/people',people)
app.use('/login',login)




app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})