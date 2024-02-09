 function saymyname() {   
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")

 }
//  saymyname()


function loggedInUser(username) {
   if(username == undefined) {
      console.log('Please enter a username.')
      return
   }
   return `${username} is this`
}

// console.log(loggedInUser())

function calculateCartPrice(...num1) {
      return num1
}

console.log(calculateCartPrice(100,200,300,2000))
