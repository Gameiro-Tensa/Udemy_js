"use strict"

// https://github.com/r-spacex/SpaceX-API
// https://api.spacexdata.com/v4/launches/

const fs = require("fs")
const rocketAsString = fs.readFileSync("rockets.json", {encoding: "utf-8"})

const rockets = JSON.parse(rocketAsString)

console.log("rockets", rockets)
console.log("Länge der Array:", rockets.length)
console.log("erste elment:", rockets[0]["rocket_name"])
console.log(rockets[0].rocket_name)
console.log(rockets[0]["rocket_id"])
console.log(rockets[0]["engines"])
console.log(rockets[0]["engines"]["propellant_1"])
// console.log("rocketAsString:", rocketAsString)

console.log("_".repeat(20))
for (const rocket of rockets) {
    console.log(rocket["rocket_name"])
}