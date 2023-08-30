// using the in built HTTP module nodejs to create a simple HTTP server 

// use the documentation to set up this

/*
    * 
    *
    *   
    * 
*/


const http = require('http');
const PORT = 3000;

const server = http.createServer(function  exec(request, response) {
    response.end("HelloWorld");

});

server.listen(PORT, function process() {
    // callback will get executed when the server will start. 

    console.log("server has started on the port", PORT);
});