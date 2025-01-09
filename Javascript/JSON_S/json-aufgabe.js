"use strict"

// https://github.com/r-spacex/SpaceX-API
// https://api.spacexdata.com/v4/launches/


const fs = require("fs")

const launches = JSON.parse(
    fs.readFileSync("launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)