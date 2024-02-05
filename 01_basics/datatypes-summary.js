// *primitive datatypes

// 7 types: String, Number, Boolean, null, undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//const bigNumber = 3456789012389n


// Reference (Non primitive)

// Array, Objects, Functions

// https://262.ecma-international.org/5.1/#sec-11.4.3

const heroes = ["shakiman", "naagraj", "doga"]

let myObj = {
    name: "Soha",
    age: 32
}

const myFunction = function() {
    console.log("Hello World");
}

// ************************************************memory***************************

// Stack (Primitive)  Heap(Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "hitesh@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

