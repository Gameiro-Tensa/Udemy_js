"use strict"

let students = [
    "Max Müller",
    "Erika Mustermann",
    "Annika Müller",
    "Max Mustermann"
]

// Prüfen: ist ein Element im Array vorhanden?
console.log(students.indexOf("Max Müller"))

// Wenn ein Element nicht existieren  -> wird  -1 ausgegeben
console.log(students.indexOf("Max Müller!"))

// Arrays sortieren
students.sort()
console.log(students)
console.log("\n")

// Sortierung umdrehen
students.reverse()
console.log(students)
console.log("\n")

// wichtig: Sparse Arrays!
students[30] = "Joker"
console.log(students)

// Die .splice()-Funktion zum entfernen von Elementen
students.splice(0, 2)
console.log(students)

// Die .splice()-Funktion zum hinzufügen von Elementen
students.splice(1, 0, "Joker")
console.log(students)