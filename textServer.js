const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((re, res) => {
    res.stausCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello im Tyhon\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
