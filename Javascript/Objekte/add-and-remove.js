"use strict"

const student = {
    name: "MAx Müller",
    age: "21",

}

// Eingeschaft hinzufügen
student.subject = "Deutsch"
// andere Schreibweise
student["InterestedIn"] = "Korean"

// Eigenschaft Löschen
delete student.age

console.log("Student:", student)