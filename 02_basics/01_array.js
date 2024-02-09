const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[3])

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
//myArr.unshift(0)
//myArr.shift(0)
//console.log(myArr)
// console.log(myArr.includes(4))
// console.log(myArr.indexOf(5))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// slice splice

// console.log(" A", myArr)

const myn1 = myArr.slice(0,3)

//console.log(myn1)

const marvel_heroes = ["thorn", "Ironman", "spiderman"]
const mc = ["superman", "flash", "batman"]

//marvel_heroes.push(mc)

// console.log(marvel_heroes)

const allHeroes = marvel_heroes.concat(mc)

// console.log(allHeroes)

// const dc = [...marvel_heroes, ...mc]

// console.log(dc)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(1)

// console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))