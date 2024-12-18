"use strict"

const students = ["Max"]

function addStudent (name) {
    students.push(name)
    console.log(students)
}

addStudent("Erika")
console.log("Students: ", students)