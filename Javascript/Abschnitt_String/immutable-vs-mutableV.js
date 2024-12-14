"use strict"

// Strings sind immutable (unveränderlich)
let greeting = "Hallo Welt"
greeting = greeting + " !"
console.log(greeting)

// Arrays sind veränderliche Datenstrukturen
let students = ["Max", "Moritz"]

let copy = students
students.push("Lukas", "Sinclair")

console.log(students)
console.log(students[2])
console.log(copy)

// Mutable und const
const students2 = ["Max", "Moritz"]
students2.push("Joker")
console.log("Students2", students2)

// students2 = ["Toti ", "Toyota"]   // nicht erlaubt

