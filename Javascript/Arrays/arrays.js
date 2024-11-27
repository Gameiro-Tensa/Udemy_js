"use strict"

/*
    Mit einem Array können wir eine komplette Teilnehmerliste speichern
*/

let students = ["Max Mueller", "Erika Mustermann", "Annika Müller", "Max Mustermann"]

console.log(students)

// Was ist der Typ von einem Array
console.log(typeof students)
console.log(students instanceof Array)

// Wie viele Elemente sind in einem Array
console.log(".length", students.length)

// Auf ein einzelnes Element zugreifen
console.log("[0]", students[2])

// Element hinzufügen
students.push("Lukas Müller", "Tensa Zangetsu")
console.log(students)

// letztes Elements entfernen
const lastElement = students.pop()
console.log("lastElement", lastElement)
console.log(students)

// Ein Elements überschreiben
students[4] = "Monkey D. Luffy"
console.log(students)