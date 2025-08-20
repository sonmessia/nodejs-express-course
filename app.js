const http = require('http');


const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received', req.url);
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});