const http =  require('http')

const server = http.createServer((req, res)=>{
if (req.url === '/') {
    res.end('home page')
}
if (req.url === '/about') {
    // blocking code
    for (let i = 0; i<10; i++){
        for(j=0; j<1000; j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('about page')
}
if (req.url === '/contact') {
    res.end('contact page')
}

})

server.listen(5000, ()=>{
    console.log('server is listening on port 5000........');
})