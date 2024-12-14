"use strict"

let students = "Max, Monika, Erika, Moritz, Anton"
console.log(students)

let studentsList = students.split(", ")
// Position der teinehmer Erika herausfinden
let position = studentsList.indexOf("Erika")
console.log(position)
// console.log(students.indexOf("Anton"))

studentsList.splice(position, 1)

students = studentsList.join(", ")
console.log(students)

console.log("-".repeat(30))
console.log(" - " + studentsList.join("\n - "))