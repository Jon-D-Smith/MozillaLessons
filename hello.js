//Loading the http module from node
const http = require('http');

//Setting up the prefix and the port
const hostname = "127.0.0.1";
const port = 8000;

//create the HTTP server
const server = http.createServer((req,res) => {
    //set the response HHTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //send the response body "Hello World"
    res.end('Hello World\n');
});

//Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})