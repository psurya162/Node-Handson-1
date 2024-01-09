const http = require('http')

const data = require('./data')

const server = http.createServer((req,res)=>{
    // console.log(req.url) //to check the url 
    if(req.url === '/'){
        res.write("Hello world")
        res.end();
    }
    else if(req.url === '/home'){
        res.write("<h1>hello Home</h1>")
        res.end()
    }
    else if(req.url === '/json'){
        const stringData = JSON.stringify(data)
        res.write(stringData)
        res.end()
    }
})

server.listen(5000 ,()=>{
    console.log("Server start")
})