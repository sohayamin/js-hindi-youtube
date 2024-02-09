//const tinderuser = new Object()
const tinderuser =  {}



tinderuser.id = "123ab"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

//console.log(tinderuser)

const regularuser = {
    email: "some@gmail.com",
     fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
     }
}

//console.log(regularuser?.fullname?.userfullname?.firstname)

const obj1 = {a: "1", b:"2"}
const obj2 = {b: "1", c:"2"}

//const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hgh@gmail.com"
    },
]

//console.log(tinderuser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: 'js in hindi',
    price: '999',
    courseinstructor: 'hitesh'
}

const {courseinstructor: ins} = course
// console.log(ins)


// in onject keys cant be quoted but in json keys are also quoted
{
    "name": 'js in hindi',
    "price": '999',
    "courseinstructor": 'hitesh'
}
