const name = "Hitesh"
const repoCount = 50
//console.log(name + repoCount)

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String("Hitesh")

// console.log(gameName[0])

// console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)

console.log(newString)

const anotherString = gameName.slice(-8,4)

console.log(anotherString)

const newStringOne = "   Hitesh   "
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))


const gameNameOne = new String("Hitesh-ch-sub")
console.log(gameNameOne.split('-'))


