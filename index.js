// Javascript Codes

// ***************************************** Preface Info **************************************************
// You can put semicolons in Javascript, in fact, it is recommended. But you can also just, well, don't.

// ***************************************** Comment **************************************************
//This is sort of redundant, but  // is the comment function for Javascript. // Is a single line comment

/* This is a multi 
line Comment. */

// ***************************************** Data Types **************************************************

/* 

    undefined - undefined
    null - blank    
    boolean - true, false
    string - "hey"
    symbol - {test: "hey"}
    number - 213

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
console.log(test6.__proto__); //Prototype chaining. This is like the reference of the functionTest2 constructor with all its value. It is kind of like a class.

const test7 = new Object(); //another way of creating a new object

let test8 = () => "newTest"; // arrow function that basically says return "newTest"

let test9 = () => {
    console.log("hello");
    console.log("world");
}; // arrow function but with curly braces / multi-lines

test9(); // calling the arrow function. PS arrow functions are usually used for one-line functions like for anonymous functiond

class TestClass {
    // Class function. A more common version of prototype chaining
    constructor(value) {
        //Constructor function
        this.value = value;
    }
}

setTimeout(() => {
    console.log("hello");
}, 500); // setTimeout is a function that waits for 500 milliseconds before executing the function.

const promiseTest = new Promise((resolve, reject) => {
    //Promise Function. This is an asynchronous function that waits for a promise to be fulfilled or rejected.
    let promiseBool = true; //Basically, Promise is an undefined value that will be true or false in the future. For this example,
    if (promiseBool) {
        // promiseBool is instantly given. resolve & reject will be the value that will be returned
        resolve("this returns true");
    } else {
        reject("this returns false");
    }
});

promiseTest
    .then((value) => {
        // When a promise is fulfilled, you can then execute the then function, which will return the value of the fulfilled promise
        console.log(value);
    })

    .catch((value) => {
        // When a promise is rejected, you can instead execute the catch function which returns the value of the rejected promise
        console.log(value);
    })

    .finally(() => {
        // When you are already done evaluating both the rejected and fulfilled promise,
        console.log("donezies"); // you can also execute the finally function which returns the value of the promise no matter what the value
    });

async function asyncTest() {
    //This is an async function. Instead of using .then, . catch, and . finally, you can use await. looks easier.
    try {
        //try catch function for javascript. If resolved, goes to try. If rejected, throws an error message thingy
        const resolveVal = await promiseTest; // await waits for the promise to be fulfilled or rejected. This now functions as a synchronous function.
    } catch {
        const rejectVal = await promiseTest;
    }
}

let test10;

const testBtn = window.document.querySelector(".button"); // Query Selector. Using the Document node, we can assign a variable with an HTML element using querySelector
const allBtns = window.document.querySelectorAll(".button"); // Query Selector All. This selects all elements that match the selector. previous one only selects the first element seen

testBtn.addEventListener("click", () => {
    console.log("hey");
}); // Event Listener. This is a function that listens for an event to occur. In this case, when the button is clicked, it will execute the function.

import React from "react"; // import function of JS.
import { Component, useState } from "react"; // Multiple import function of JS in same module

testBtn.addEventListener("click", async () => {
    //notice this other one has async
    const React = await import("react"); // this is same as the import function previously, but this time, this will only load the import when you actually need to use it instead
}); // This way of importing is called dynamic import. Uses the feature of async to just wait for the execution of import when used. pretty clever

/* 
WHY JS FRAMEWORKS EXIST

JS is basically used for changing elements on the page. However, it does this in a way that you manually change a property of the element every time. Frameworks
fix this problem by making the properties of an element behave like an input function so you can dynamically change its properties without hardcoding the property


WHAT IS MODULE BUNDLER

It bundles all js modules to a single file so the browser only has to load one file instead of multiple files.


WHAT IS THE DIFFERENCE BETWEEN IMPORT AND REQUIRE
import is for esm and require is for cjs. CJS is the older version and its not useful for me for now. just use import. you have backwards compatibility with CJS module anyways
There's now a thing called Bun that tries to fix this issue of divide but at the time of writing this, it's still pretty new. Who knows what it will become tho fr fr
*/
