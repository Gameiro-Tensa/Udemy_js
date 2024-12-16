"use strict"

const students = ["Max", "Erika", "Monika"]

/*
for (let i = 0; i < students.length; i++) {
    console.log("i: ", i)
    console.log(students[i])
}
*/

/*
for (let i in students) {
    console.log("i: ", i)
    console.log(students[i])
}
*/

for (const student of students) { // jede elemente durchlaufen, der index interessiert uns nicht
    console.log(student)
}