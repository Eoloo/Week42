let http = require('http');
let url = require("url")

let start = function(route, handle){

    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + " has been received.")
        route(handle, pathname);

        // console.log("Request received!")
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write("Good morning world, Welcome to node.js");
        response.end();
    }
   
    http.createServer(onRequest).listen(3000);
   
    console.log("Server has started.")
 }
 
 exports.start = start;