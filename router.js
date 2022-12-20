function route(handle, pathname){
    console.log("About to route a request for " + pathname);
    // Check if the request url is a function. since we mapped our expected request urls to a function in request handlers
    if (typeof handle[pathname]==='function'){
        handle[pathname]()
    }else{
        console.log("No request handler found for " + pathname);
        return "404 Not found"
    }
 }
 
 exports.route = route;