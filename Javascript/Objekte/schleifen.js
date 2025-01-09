"use strict"

const student = {
    name: "Max Mustermann",
    age: 21
}

for (const key in student) {
    const value = student[key]
    
    console.log("Key:", key)
    console.log("Values", value)
}

// Object.keys()
console.log("Object.keys:", Object.keys(student))

// Object.values()
const values = Object.values(student)
console.log("Object.values:", values)

// Object.entries()
const entries = Object.entries(student)
console.log("Object.entries:", entries)
for (const entry of Object.entries(student)) {
    console.log(entry)  // gibt is Form von Array aus
    console.log(entry[0] + ": " + entry[1]) // gibt jede value mit seine key
}