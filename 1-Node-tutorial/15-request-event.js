const http = require('http')
//using Event emitter api
const server = http.createServer()
//emits request event
//subscribe to it/listen for it/ respond ti it
server.on('request',(req, res)=>{
res.end('welcome')
})
server.listen(5000)