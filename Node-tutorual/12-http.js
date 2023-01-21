const http = require('http')

// http module create server function 
const server = http.createServer((req, res) => {

if (req.url === '/') {
    res.end('Welcome to our home page')
}

if (req.url === '/about') {
    res.end('here is about our short story')
}
// res.end(`
// <h1>oops!</h1>
// <p>we can't seem to find the page you are looking for</p>
// <a href="/">back home</a>
// `)

})

// http module server port

server.listen(5000)
