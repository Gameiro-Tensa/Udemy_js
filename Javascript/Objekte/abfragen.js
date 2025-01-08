"use strict"

const student = {
    name: "Max Musterman",
    age: "21",
    subject: "English"
}

// student["age"] = 22
// Beide Schreibweise sind equivalent
student.age = 23

console.log(student["name"])
console.log(student["age"])
console.log(student["subject"])

console.log(student)