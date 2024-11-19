"use strict"

let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   "

// Bei einer Einkaufsliste haben sich ein paar Fehler eingeschrieben. Unsere Texterkennung des Scans hat ein Paar Leerzeichen
// zu viel erkannt, sowie ein paar Plus-Zeichen eingelesen, die im original gar nicht existieren. Das möchten wir korrigieren!

// Aufgabe 1: Entferne die Leerzeichen links und rechts, und schreibe das Ergebnis zurück in die Variable "shopping"
shopping = shopping.trim()
console.log(shopping)
console.log(shopping.length)
console.log("\n")

// Aufgabe 2: Finde die position der drei Plus-Zeichen, und speichere diese in einer Variable
let position    
position = shopping.indexOf('+++')
console.log("Die Position der drei Plus-Zeichen ist " + position)
console.log("\n")

// Aufgabe 3: Schneide die 3 Plus-Zeichen aus und gebe das Ergebnis mit einem console.log aus.
// Verwende dazu einmal die .substr()-Funktion, und einmal die .slide()-Funktion
console.log(shopping.substr(0, position) + shopping.substr(position + 3, 34))

// zweite Schreibweise
console.log(shopping.slice(0, 17) + shopping.slice(20, 34)) 
console.log("\n")

// let newShopping = shopping.slice(0, 17) + shopping.slice(20)
// console.log(newShopping)

// Aufagbe 4: Schneide die 3 Plus-Zeichen aus. Verwende dazu die .replace()-Funktion!
let newShoppingList = shopping.replace("+++", "")
console.log(newShoppingList)
console.log("\n")

// Aufgabe 5: Jetzt soll die Shopping-Liste ausgegeben werden. 
// Wandle die Liste in folgendes Schreibweise um. Platziere auch die 2 Strich über / unter Auflistung,
// und verwende dazu die .repeat()-Funktion! 
// 
// ---------------------
// Einkaufsliste:
//  - Apfel
//  - Pfirsich
//  - Avocado
//  - Mango
// ---------------------

shopping = shopping.replace("+++", "")

console.log("-".repeat(20))
console.log("Einkaufsliste:")

//  Alternative 
// let shoppingList = shopping
//     .replace(", ", "\n - ")
//     .replace(", ", "\n - ")
//     .replace(", ", "\n - ")
// console.log(" - " + shoppingList)

console.log(" - " + shopping.replace(", ", "\n - ").replace(", ", "\n - ").replace(", ", "\n - "))

console.log("-".repeat(20))