const app = require("./app");

//! Console Module In Node  js
console.log("Hello Vaishal");

var a = 10;
var b = 20;
var c = 30;

console.log(a + b + c);

//! Basic Javascript Fundamental

//! Diff bet === and ==

var x = "10";

if (x == 10) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

var x = 10;

if (x === 10) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

//! For Loop

for (var i = 0; i < 10; i++) {
  console.log(i);
}

//! Array In Javascript

const arr = [10, 20, 30, 40];
console.log(arr);

//! In Array Apply Filter Function

var result = arr.filter((item)=>
{
    return item>20;
})
console.log(result);

//! Export And Import In Node Js

console.log(app.z());
