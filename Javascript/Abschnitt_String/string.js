"use strict"

let greeting = " ---Hallo Welt!---  "

// Die Anzahl der Zeichen in einen String
console.log(greeting.length)

// Ein einzelnes Zeichen abfragen
console.log(greeting[9])
console.log(greeting[13])
console.log(greeting.charAt(4))

// Wo findet sich ein Zeichen in einem String ?
console.log(greeting.indexOf('!'))
console.log(greeting.indexOf('---', 10))    //nimmt gleich die erste Zeichen

// Großbuchstaben bzw. Kleinbuschtaben
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// Text ersetzen
console.log(greeting.replace("!", "1235"))

// Zeichen rechts und links von String entfernen
console.log(greeting.trim())
console.log("--------------------------------------------------")

// Wenn ich die Variable verändern möchte, dann ...

// greeting = greeting.trim()      // leerzeichen wurden am Vorne und Hintern entfernt
// console.log(greeting)

greeting = greeting.replace("Welt", "JavaScript")
console.log(greeting)
console.log("------------------------------------------------------------------")

console.log(greeting.trim().toLowerCase().length)

greeting = greeting.toLowerCase()
console.log(greeting)
console.log("------------------------------------------------------------------")

greeting = greeting.split()
console.log(greeting)