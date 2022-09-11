// Functions are First-Class Data Types
// Functions ARE objects
//They can be used like variables
// function multiply (x,y) {
//   return x*y;
// };
// var x=4,y=5;
// console.log(multiply);
// console.log(multiply(4,5)); 
// multiply.version = "v.1.0.0";
// console.log(multiply.version);


//** my understanding of functions
function check(low,high) { //function to check if a number is low than the second number
  return low<high;
};

// check.version = "v.1.0.0"; //can be treated as an object or variable i.e name/value pair (properties)can be passed on it
// console.log(check.version); //or using bracket notation
// console.log(check["version"]);   
// console.log(check(2,5)); //this calls or invokes the funtion the function is executed.e.g multiply();
// console.log(check); //this is used to call or display the value of the function. It displays it's value like a fuction. It does not executes the code.
var container = check(); //their return result can be passed to (or stored in)  a variable
var newFunc = check; //their value can also be passed to ( or stored in)  a variable
console.log(container);//the return value will be false because no arguments (or parameter) was passed there low,high became undefined 
                        //to display (or print) the value of the container
console.log(newFunc); //to display (or print) the value of the function in the same way a variable is displayed
console.log(newFunc(5,6)); // the value of the check function was passed to the newFunc 
                         //to execute and display (or print) the return value of the function
//end of my understanding of function


// // Function factory
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };

//   return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// // Passing functions as arguments
// function doOperationOn(x, operation) {
//   return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);










