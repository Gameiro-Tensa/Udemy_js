"use strict"

// Aufgabe 1
let i = 1

while (i <= 25) {
    console.log(i + ": Ich soll im Unterricht nicht stören")
    i ++
}

console.log("-".repeat(30))
// Aufgabe 2

let students = [
    "Max",
    "Monika",
    "Lukas",
    "Lena",
    "Philipp",
    "Anna",
]
// Variablen, indem die zwei Listen gespeichert werden
const kurs1 = []
const kurs2 = []

for (let i = 0; i < students.length; i++) {
    if (i % 2 === 0) {
        kurs1.push(students[i])
    }
    else {
        kurs2.push(students[i])
    }
}
/*
// Alternative
for (const i in students) {
    if (i % 2 === 0) {
        kurs1.push(students[i])
    }
    else {
        kurs2.push(students[i])
    }
}
*/

// Ausgabe der beiden Listen
console.log("Teilnehmer der Kurs1: ", kurs1)
console.log("Teilnehmer der Kurs2: ", kurs2)

// Aufgabe 3

let levels = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2"
]

let prices = [
    400,
    500,
    550,
    600,
    650,
    700
]

let priceTotal = 0
// Schleife, die die Preise der einzelnen Niveaus addiert bis C1
for (let i = 0; i  < levels.length; i++) {
    priceTotal = priceTotal + prices[i]
    if (levels[i] == "C1") {
        break
    }
}

console.log("Der gesamte Preis von A1 bis C1 beträgt: ", priceTotal)

// Preise von A2 bis C1 berechnet
let costsFromA2toC1 = 0
let levelA2Seen = false

for ( const i in levels) {
    const level = levels[i]
    const price = prices[i]

    if (level === "A2") {
        levelA2Seen = true
        continue
    }

    if (levelA2Seen) {
        costsFromA2toC1 +=price
    }

    if (level === "C1") {
        break
    }
}
console.log("Der Preis von A2 bis C1 beträgt: ", costsFromA2toC1)

// let mediumPrice = 0
// for (let i = 1; i < levels.length - 1; i++) {
//     mediumPrice = mediumPrice + prices[i]
// }

// console.log("Der Preis von A2 bis C1 beträgt: ", mediumPrice)

// Ein Teilnehmer möchte (maximal) 1500€ in seine SPrachkenntnisse insvestieren.
//  Bis zu welchem Level (bei A1 anfangen) können wir ihn dafür unterrichten ?
let maxInvestment = 1500
let newPrice = 0
for (const i in levels) {
    const level = levels[i]
    const price = prices[i]

    if (newPrice + price >= 1500) {
        console.log("Wir können bis einschließlich hierhin unterrichten", levels[i - 1])
        break
    }
    newPrice +=price
}
/*
for (let i = 0; i < levels.length; i++) {
    newPrice = newPrice + prices[i]
    if (maxInvestment >= newPrice) {
        console.log("Wir können ihn für das Level ", levels[i], " unterrichten")
    }
    
}
*/

// Aufgabe 4
let studentsPerCourse = [
    ["Max", "Monika"],  // Erster Kurs
    ["Erik", "Erika"],   // zweiter Kurs
]

// Die Anzahl der Teilnehmer in allen Kursen berechnen!
let totalStudents = 0
for (let i = 0; i < studentsPerCourse.length; i++) {
    totalStudents = totalStudents + studentsPerCourse[i].length
}
console.log("Anzahl der Teilnehmer in allen Kursen: ", totalStudents)
// Alternative mit for...of
let totalStudents2 = 0
for (const course of studentsPerCourse) {
    totalStudents2 = totalStudents2 + course.length
}
console.log("Anzahl der Teilnehmer in allen Kursen: ", totalStudents)

// alternative mit reduce()
let totalStudents3 = studentsPerCourse.reduce((sum, course) => sum + course.length, 0);

console.log("Anzahl der Teilnehmer in allen Kursen: ", totalStudents);

const studentToCancel = "Max"
let studentFound = false
for (let i = 0; i < studentsPerCourse.length; i++) {
    if (studentsPerCourse[i].indexOf(studentToCancel) !== -1) {
        // Max entfernen
        studentsPerCourse[i].splice(studentsPerCourse[i].indexOf(studentToCancel), 1);
        console.log("Max wurde aus diesem Kurs rausgenommen")
        studentFound = true
        break
    }
}

console.log(studentsPerCourse)
if (studentFound === false) {
    console.log("Kein Teilnehmer entfernt")
}

let indexLeastStudent = -1
for (const i in studentsPerCourse) {
    const course = studentsPerCourse[i]
    if (indexLeastStudent === -1) {
        indexLeastStudent = i
    }

    else {
        if (course.length < studentsPerCourse[indexLeastStudent].length) {
            indexLeastStudent = i
        }
    }
}
console.log(indexLeastStudent)