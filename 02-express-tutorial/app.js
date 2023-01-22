const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log('user hit the server');
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
    //about page
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page us</h1>");
    res.end();
    // if not match url
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});
server.listen(5000);
