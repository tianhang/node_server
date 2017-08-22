import http from 'http';

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world !\n');
});

server.listen('1337','127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');