console.log('Express Tutorial')

const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');  

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(homeStyles);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        res.write(homeImage);
        res.end();
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});