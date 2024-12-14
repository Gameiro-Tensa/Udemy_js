"use strict"

let english1 = [
    "\x4C\x75\x7A\x69\x61",
    "\x4B\x69\x6E\x65\x64\x65\x74\x74\x6F",
    "\x42\x65\x6E\x65\x64\x65\x74\x74\x6F",
    "\x47\xFC\x6E\x74\x68\x65\x72"
];

let english2 = [
    "\x57\x69\x62\x6B\x65",
    "\x4A\x65\x61\x6E\x65\x74\x74\x65",
    "\x50\x61\x75\x6C"
]

// a
console.log(english1.includes("Paul"))
// console.log(english1.indexOf("Paul"))
console.log(english2.includes("Paul"))

// Monika am Ende der Liste hinzufügen
english2.push("Monika")
console.log("-".repeat(20))
console.log("\n")


// b
console.log(english1.includes("Günther"))
console.log(english2.includes("Günther"))

console.log("Position von Günther in der Liste: " + english1.indexOf("Günther"))
pos = english1.indexOf("Günther")
english1.splice(pos, 1)

console.log(english1.includes("Günther"))       // muss nicht unbedingt die gesamte Liste ausgegeben werden

// c) Beide Lise sortieren

english1.sort()
english2.sort()

english1.unshift("Anton")       // Element am Anfang der Liste hinzufügen
// console.log(english1.includes("Anton"))

console.log("Länge der Liste1: " + english1.length)
console.log("Länge der Liste 2: " + english2.length)

console.log("\n")
console.log(english1)
console.log(english2)

