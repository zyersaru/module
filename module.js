//3. new variable, day, which is a private function (outside of the module)
var day = function () {
  console.log("Today is Friday.");
}

//1. implemented module
module.exports = {
  Name: process.argv[2],
  //2. function that will be exported
  Date: function() {
    //3. returns a value of the function from outside the module object
    return day();
  }
}