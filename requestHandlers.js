
// function for handling index.html business logic
function index (){
    console.log("Request handler for index was called.")
    return "Welcome to our world of Devops"
 }
 
 // function for handling portfolio.html business logic
 function portfolio(){
    console.log("Request for handler for portfolio was called.")
    return "a project i am very passionate about"
 }
 
 
 exports.index = index;
 exports.portfolio = portfolio;