// // //global object

// function test() {
//   console.log(this)
//   this.myname="Guru";
// }
// test();
// console.log(this.myname); //OR
// // console.log(window.myname);



// // Function constructors
// function Circle (radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = 
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };


// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

//// Are functions passed by value or by reference?
function afunction() {
console.log("I am passed by reference");
}
console.log(afunction)
var sonfunction = afunction;
console.log(sonfunction)
function afunction(value) {
  console.log("I just kidding");
}
console.log(sonfunction);
function afunction(value) {
  console.log("I am passed by reference");
}
function sonfunction(value) {
  console.log('Did I affect my dad?')
}
console.log(afunction());
console.log(sonfunction())
console.log(afunction())
function afunction(value) {
  console.log("I only affect my son");
}
console.log(afunction());
console.log(sonfunction());
console.log(afunction());
////my Observation:
/* Given a particular function "A", called the parent function, passed as the value to another function "C", called the child function.

*I observed that the when a specific function is declared more than once in a code, the interpreter takes the last declared state of function and ignores the rest even if the function was invoked before it's last state.
*The last state of the function is therefore called the "Chosen state" 
* The invokation of that function will only act in accordance of the "chosen state" which is the last declared state of the function.
*The child function value is affected by the changes in the last state of the parent function
*changes in the son however do not affect the parent function neither does it affect the child function.The change in the child last state is invisible and not taken into account.
*The child function become a full replica of the parent with a unique characteristics of its own.
*/
function mumfunction() {
  console.log("I am his mum");
}
sonfunction= mumfunction;

console.log(sonfunction);