"use strict"

// 1. Art
// man sagt: function deklaration
function sayHello(name) {
    console.log("Hello Welt!!" + name)
}

sayHello(" Tensa")

// 2. Art anonyme funktion
// man sagt: function expression
const sayHallo2 = function  () {
    console.log("SayHallo2!!")
}
sayHallo2()

// 3. Art anonyme funktion
// man sagt: function expression
const sayHallo3 = () => {
    console.log("sayHallo!!")
}

sayHallo3()