"use strict"

const data = [
    {firstname: "Max", age: 21, enrolled: true},
    {firstname: "Anna", age: 35, enrolled: false},
]

console.log("data:", data)

const dataAsJson = JSON.stringify(data)

console.log("dataAsJson:", dataAsJson)
console.log("typeof datAsJson:", typeof dataAsJson)

// Antipattern! fs.writeFileSync() ist langsam

const fs = require("fs")
fs.writeFileSync("ausgeben.json", dataAsJson)