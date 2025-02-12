"use strict"

const https = require("https")
const http = require("http")

const url = "https://api.spacexdata.com/v4/launches/latest"
// const url = "https://autovio.de/fuer-fahrschueler/fuehrerschein-theorie-lernen/1-5/1-5-01/1-5-01-126/"

https.get(url, res => {

    let data = " "
    res.on("data", chunk => {
        console.log("chunk", chunk)
        data += chunk
    })

    res.on("end", () => {
        const dataAsObj = JSON.parse(data)
        console.log(dataAsObj)
        console.log(dataAsObj["links"])
    })
    // console.log("Statuscode des Antwortes anzeigen lassen: ", res.statusCode)
    // console.log("Hearder des url anzeigen lassen: ", res.headers)
})