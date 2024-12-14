"use strict"

// Startbetrag
let amountStr = "15,37"

// Zuerst den Betrag in die englische Schreibweise umwandeln, also das Komma mit einem Punkt ersetzen
amountStr = amountStr.replace(",", ".")
console.log(amountStr)

// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und rechne ihn in Cent um.
let amount = parseFloat(amountStr) * 100
console.log(amount + " Cent")

// Gebe dann aus, mit welchem Münzen dieser Betrag bezaht werden kann. Der Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahl 

console.log("\n")
console.log(" -- " + Math.floor(amount / 200)+ " x 2€")
amount = amount - Math.floor(amount / 200) * 200

console.log(" -- " + Math.floor(amount / 100) + " x 1€")
amount = amount - Math.floor(amount / 100) * 100
console.log(amount)


//  Aufagbe 2
console.log("\n")
let bill = 16.00

let billTotal = Math.ceil(bill * 1.1 / 4) * 4

console.log("Der Gesamtbetrag $ " + billTotal.toFixed(2) + "$")
