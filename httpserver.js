const http=require('http')
const{readFileSync}=require('fs')

//get all files
const homepage=readFileSync('./navbar-app/index.html')
const css=readFileSync('./navbar-app/styles.css')
const browser=readFileSync('./navbar-app/browser-app.js')
const logo=readFileSync('./navbar-app/logo.svg')

const server=http.createServer((req,res)=>{
    // console.log(req.method)
    const url= req.url
    console.log(url)
    //Homr page
    if(url==='/')
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    res.end()
    }
    //About page
    else if(url==='/about')
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
    }
    //style
    else if(url==='/styles.css')
    {
    res.writeHead(200,{'content-type':'text/css'})
    res.write(css)
    res.end()
    }
    //browser-app script
    else if(url==='/browser-app.js')
    {
    res.writeHead(200,{'content-type':'text/javascipt'})
    res.write(browser)
    res.end()
    }
    //logo
    else if(url==='/logo.svg')
    {
    res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(logo)
    res.end()
    }
    //Erroe page
    else
    {
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>error 404 </h1>')
    res.end()
    }
})

server.listen(5000)