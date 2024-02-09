// singleton

//Object.create

// objet literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//Object.freeze(JsUser)
JsUser.name = "Soha"
//console.log(JsUser)
// console.log(typeof JsUser.mySym)

JsUser.greeting = function() {
    console.log(`Hello this is ${this.name} user`)
}

console.log(JsUser.greeting())