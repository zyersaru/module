//importing(require) the module from within the same folder
var greet = require("./module");

//console logging "Hello" and concatinate with user input name
console.log("Hello " + greet.Name);
//invokes date function from module.js, which invokes the function at date variable
greet.Date();