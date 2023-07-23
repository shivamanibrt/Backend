const fs = require('fs');
const http = require('http')

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

http.createServer((req, res) => {
    res.end('Hello from the server!');
})