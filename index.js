const fs = require('fs');
const http = require('http')
const url = require('url')

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avacodo: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written')

//Non-Blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data) => {
//         console.log(data2);
//     })
// });
// console.log('Will read file!');


//Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/' || pathName === '/overView') {
        res.end('This is overview')
    } else if (pathName === '/product') {
        res.end("This is the product");
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page not found</h1>Page not found!');
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000')
}); 