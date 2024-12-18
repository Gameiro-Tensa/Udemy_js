"use strict"

function sayHello(name, language) {
    if (language === "de") {
        console.log("Hallo " + name + "!")
    }
    else if (language === "en") {
        console.log("Hi " + name + "!")
    }
}

sayHello("Max", "de")
sayHello("Müller", "de")
sayHello("Tensa", "en")