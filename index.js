// Javascript Codes

// ***************************************** Preface Info **************************************************
// You can put semicolons in Javascript, in fact, it is recommended. But you can also just, well, dont.

// ***************************************** Comment **************************************************
//This is sort of redundant, but  // is the comment function for Javascript. // Is a single line comment

/* This is a multi 
line Comment. */

// ***************************************** Data Types **************************************************

/* 

undefined, null, boolean, string, symbol, number

 */

var test1 = "hey"; // nobody uses this guy anymore sad. you have to initialize a value for this

let test2 = "hello"; // new guy that replaced var. variable can be undefined

const test3 = "sup"; // fixed variable. cannot be reassigned

var test4 = {
    test1: "hey",
    test2: 3,
};

test4.test1 = "hello"; // hard code method of accessing object data
test4[test1] = "world"; // hot code method that allows you to change what to access later on the runtime

test5 = [1, 2, 3]; // array data type

test5[0] = 6; // accessing array data

var numberTest = ((8 * 3) / 2 - (1 + 1)) % 3; // Demonstrates the different operators in js. (* / + - % = Multiply, Divide, Add, Subtract, Modulo)
numberTest++;
numberTest--; // Add and Subtract numberTest by 1
numberTest += 2;
numberTest -= 2; // Add and Subtract numberTest by 2       NOTE: *= /= is also possible

console.log(numberTest); // Print function for javascript. This print only shows in console at websites though. You could also use node.js

console.log('Adding "Quotes" inside '); // It is tricky to print "" in console.log since code will assume it's end line of string. use \" to bypass
console.log('Alternative "Quote" '); // You can use '' instead of "" so you can freely use "" with no extra steps
console.log(`Even more '"Alternative"' Quote`); // You can also use `` so you can now use '' freely as well, along with ""

function functionTest() {
    // function format for Javascript
    return "ayo";
}

console.log(functionTest()); // template object

function functionTest2() {
    this.test = "newTest"; // this - it is for referencing the variable of the template object. If you're going to use let instead of this.___,
} // you will only be adding a value to this function. creating a new object based on this function will not pass newTest value

let test6 = new functionTest2(); // creating a new object functionTest2 using new keyword

console.log(test6.test);

function functionTest() {
    let b = "test";

    let a = "test";

    return 0;
}
