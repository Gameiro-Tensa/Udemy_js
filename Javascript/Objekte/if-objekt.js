"use strict"

const student = {
    name: "Max Mustermann",
    age: 20,
    enrolled: true,
    numberOfCourse: 0
}

if (student.enrolled) {
    console.log("Hello, " + student.name + " ist eingeschrieben!")
}

if (student.numberOfCourse) {
    console.log("Anzahl von Course ")
}

if ("numberOfCourse" in student) {
    console.log("numberOfCourse ist in student ")
}