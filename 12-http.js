const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <a href="/">Back to home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});