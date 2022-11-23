const express=require('express')
const { products } = require('./data')
const morgan =require('morgan')
const app=express()
const logger=require('./logger')
const authorize=require('./authorize')
//req => middleware => res

// app.use([logger,authorize])

//1. use vs route
//2. options - our own / express/ third party

// app.use([logger,authorize])
// app.use(express.static('./navbar-app'))


// app.use('/api',logger)
// api/home/about/products

app.use(morgan('tiny'))

app.get('/',logger,(req,res)=>{
    res.send('Home')
})

app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',[logger,authorize],(req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})