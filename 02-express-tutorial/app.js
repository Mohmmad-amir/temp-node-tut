const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homePageStyle = readFileSync('./navbar-app/styles.css');
const homePageBrowserJs = readFileSync('./navbar-app/browser-app.js');
const homePageLogo = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log('user hit the server');
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();

  } 
      //about page
    else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();

  } 
      // style.css
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homePageStyle);
    res.end();

  } 
  //logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homePageLogo);
    res.end();
  }
  //browser.js
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homePageBrowserJs);
    res.end();
  }

      // if not match url
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found are you looking for</h1>");
    res.end();
  }
});
server.listen(5000);
