// Event Emitter    
const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data received. Name: ${name}, ID: ${id}`);
});

customEmitter.on('response', (name, id) => {
    console.log(`Another data received. Name: ${name}, ID: ${id}`);
});

customEmitter.emit('response', 'John Doe', 123);

// HTTP
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received', req.url);
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
