
//Immediately invoked function expressions
(function chai(name) {
    console.log(`DB CONNECTED ${name}`)
})('soha');

((name) => {
    console.log(`DB CONNECTED 2 ${name}`)
})('hitesh')

