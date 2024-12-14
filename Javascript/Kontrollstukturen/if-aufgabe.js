"use strict"

// Der erste Sprachkurs der Sprachshule
let students1 = ["Torsten", "Laura"]

// Der zweite Sprachkurs der Sprachschule
let students2 = ["Tobias", "Anna", "Michelle"]

// Aufgabe 1)

let studen1 = "Tensa"

if (students1.includes(studen1) && students2.includes(studen1)) {
    console.log("Tensa ist in beiden Kursen eingeschrieben")
}
else {
    console.log("Tensa ist in keinem der Kurse eingeschrieben")
}
console.log("-".repeat(30))

let student2 = "Torsten"
if (students1.indexOf(student2) !== -1 || students2.indexOf(student2) !== -1) {
    console.log(student2 + " ist in einem der Kurse eingeschrieben")
}
else {
    console.log(student2 + " ist in keinem der Kurse eingeschrieben")
}

console.log("-".repeat(50))
// Aufgabe 2)

if (students1.length < students2.length) {
    console.log("Der erste Kurs hat weniger Schüler als der zweite Kurs")
    students1.push("Tom")
    console.log(students1)
}
else {
    students2.push("Tom")
    console.log(students2)
}
console.log("\n")
console.log("-".repeat(50))

// Augabe 3)

let studen = "Tobias"
if (students1.indexOf(studen) !== -1) {
    students1.splice(students1.indexOf(studen), 1)
}
else {
    students2.splice(students2.indexOf(studen), 1)
    console.log(students2)
}

console.log("\n")
console.log("-".repeat(60))

// Aufagbe 4)

let numberOfStudent = 15

if (numberOfStudent === 1) {
    console.log("Der Sprachkurs kostet 40€ die Stunde pro Teilnehmer! ")
}
else if (numberOfStudent <= 5) {
    console.log("Der Sprachkurs kostet 25€ die Stunde pro Teilnehmer! ")
}
else if ( numberOfStudent >= 6) {
    console.log("Der Sprachkurs kostet 15€ die Stunde pro Teilnehmer! ")
}