"use strict"

let s = "3.141"

// String in eine Ganzzhal umwandeln
console.log(parseInt(s, 10))

// String in eine Kommazahl umwandeln
console.log(parseFloat(s))

// Achtung beim Rechnen mit Kommazahlen!  ===> Lösung Kommazahlen vermeiden
let result = 50.35 % 6 -2.35
console.log(result)

// Lösung: Kommmazhlen vermeiden
let result2 = 5035 % 600 - 235
console.log(result2)

//  Zahl zu String
let n = 3.141
console.log("" + n)
console.log(n.toExponential(5))    // Exponential mit 5 Nachkommastellen
console.log(n.toExponential(2)) // Exponential mit 2 Nachkommastellen
console.log(n.toFixed(2))
console.log(n.toString())