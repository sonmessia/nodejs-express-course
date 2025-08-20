const http = require('http');



const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage');
    } else if (req.url === '/about') {
        // Blocking code
        for (let i = 0; i < 10000; i++) {
            // Simulating heavy computation
            console.log(i);
        }
        res.end('This is the about page');
    } else {
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});