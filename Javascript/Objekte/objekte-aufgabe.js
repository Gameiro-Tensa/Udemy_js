"use strict"

const LANGUAGE_DE = ["hallo", "heute", "sprachkurs", "willkommen", "mikrofon", "und"]

const LANGUAGE_EN = ["hello", "today", "language course", "welcome", "microphone", "and"]

let DE_TO_EN = {}

for (const i in LANGUAGE_DE) {
    const wordDe = LANGUAGE_DE[i]
    const wordEn = LANGUAGE_EN[i]

    DE_TO_EN[wordDe] = wordEn
}

console.log("DE_TO_DE:", DE_TO_EN)


console.log("\n" + "-".repeat(40))
// Aufagbe 2

const students = [
    {firstname: "Max", lastname: "Mustermann", age: 21},
    {firstname: "Laura", lastname: "Müller", age: 25},
    {firstname: "Julia", lastname: "Schreiber", age: 30},
    {firstname: "Tobias", lastname: "Lieb", age: 19}
]
// console.log(students[0].firstname)
// Durschnittliche Alter der Teilnehmer berechnen
let ageSum = 0
let averageYear = 0
for (let i = 0; i < students.length; i++) {
    ageSum += students[i].age
}

averageYear = ageSum / students.length
console.log("Das durchschnittsalter ist: " + averageYear + " Jahre")

// Ein neuer Teilnehmer mit der Name "Christian Schmidt" hinzufügen, das Alter kenne wir noch nicht 
students.push({firstname: "Christian", lastname: "Schmidt"})    // mit push, da students ein Array ist
console.log(students)


let ageSum2 = 0
let averageYear2 = 0
let studentWithAge = 0

/*
for (let i = 0; i < students.length; i++) {
    if (i.age) {
        ageSum2 += students[i].age;
        studentWithAge++;
    }
} 
*/
for (let i = 0; i < students.length; i++) { // for (const student of students) {}
    if (students[i].age) {
        ageSum2 += students[i].age
        studentWithAge++
    }
}

console.log(studentWithAge)
averageYear2 = ageSum2 / studentWithAge

if (studentWithAge === 0) {
    console.log("Durchschnittsalter konnte nicht berechnet werden!!")
}
else {
    console.log("Das durchschnittliche Alter ist: " + averageYear2 + " Jahre")
}
