"use strict"

function sayHello() {
    console.log("Hello")
    return 0

    console.log("Hallo Welt")
}

// indexOf, Zum Überprüfen ob, ein value in der liste steht
function indexOf(liste, value) {
    for (const i in liste) {
        if (liste[i] === value) {
            return i
        }
    }
    return -1
}

let zeichen = indexOf(["hallo", "Welt", "?"], "hi")
console.log(zeichen)