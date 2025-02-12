"use strict"

// https://github.com/r-spacex/SpaceX-API
// https://api.spacexdata.com/v4/launches/


const fs = require("fs")

try {
    const launches = JSON.parse(
        fs.readFileSync("launches.json", {encoding: "utf-8"})
    )
    
    console.log("Anzahl launches:", launches.length)
    console.log("")
} catch (error) {
    console.error("Fehler beim Lesen oder Parsen der Datei: ", error.message)
}