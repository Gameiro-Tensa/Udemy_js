"use strict"

/*
let a = false

if (a) {
    console.log("Hallo welt")
}
*/

/*
let zahl1 = 7
let zahl2 = 6

if (zahl1 <= zahl2) {
    console.log("Die Zahl 1 ist kleiner oder gleich der Zahl 2!")
}
else {
    console.log("Die Zahl 1 ist größer als die Zahl 2!")
}
*/

let students = ["Max", "Moritz"]

if (students.indexOf("Erika") === -1) {
    console.log("Erika ist nicht in der Liste!");
}
if (students.includes("Max")) {
    console.log("Max ist in der Liste ")
}