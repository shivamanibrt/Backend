const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const port = 4000;
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/general') {
        res.end('This is general api call')
    }
    else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data)
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/plain' })
        res.end('Not Found')
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log('Server is running on the port', port)
})