"use strict"

// Warum benötigen wir anonyme Funktionen ?

const fs = require("fs")
fs.readdir(__dirname, (err, files) => {
    console.log(files)
})


const sayHallo = () => {
    console.log("Hallo")
}

console.log("sayHallo:")
// console.log("sayHallo:", sayHallo)

const a = sayHallo
a()