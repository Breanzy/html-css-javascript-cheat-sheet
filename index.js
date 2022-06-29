// Javascript Codes

// ***************************************** Preface Info **************************************************
// You can put semicolons in Javascript, in fact, it is recommended. But you can also just, well, dont.

// ***************************************** Comment **************************************************
//This is sort of redundant, but  // is the comment function for Javascript. // Is a single line comment

/* This is a multi 
line Comment. */

// ***************************************** Data Types **************************************************

/* 

undefined, null, boolean, string, symbol, number, object

 */

var test1 = "hey";

let test2 = "hello";

const test3 = "sup";


var numberTest = (((8*3) / 2) - (1 + 1)) % 3;      // Demonstrates the different operators in js. (* / + - % = Multiply, Divide, Add, Subtract, Modulo)
numberTest++; numberTest--;                        // Add and Subtract numberTest by 1
numberTest += 2; numberTest -= 2;                  // Add and Subtract numberTest by 2       NOTE: *= /= is also possible

console.log(numberTest);                           // Print function for javascript. This print only shows in console at websites though

console.log("Adding \"Quotes\" inside ");          // It is tricky to print "" in console.log since code will assume it's end line of string. use \" to bypass
console.log('Alternative "Quote" ');               // You can use '' instead of "" so you can freely use "" with no extra steps
console.log(`Even more '"Alternative"' Quote`);    // You can also use `` so you can now use '' freely as well, along with ""

