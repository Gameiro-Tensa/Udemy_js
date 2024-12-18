"use strict"

// Zuerst erstellen wir ein paar Variablen. Was hier genau passiert ist (jetzt) nicht wichtig, das einzige was wichtig ist, 
// dass wir hier das aktuelle Datum abfragen und Teile davon in Variablen schreiben

// Tag im Monat
let dayOfMonth = (new Date()).getDate()
console.log(typeof dayOfMonth)
console.log(dayOfMonth)
console.log("---------------------------")

// Der Name des aktuellen Monat
// let monthNames = ["Januar", "Fabruar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

// let currentMonth = monthNames [new Date().getMonth()]
// console.log(currentMonth)

// Der Name des aktuellen Monat
let monthName = (new Date()).toLocaleDateString(["de", "en"], {month: "long"})
console.log(typeof monthName)
console.log(monthName)
console.log("------------------------")

// Das aktuelle Jahr {Schreibweise 1}
let year1 = (new Date()).getFullYear()
console.log(typeof year1)
console.log(year1 + 5)  // das plus funktioniert hier, was es sich um ein number handelt
console.log(year1)
console.log("-------------------")

// Das aktuelle Jahr {Schreibweise 2}
let year2 = (new Date()).toLocaleString(["de", "en"], {year: "numeric"})
console.log(typeof year2)
console.log(year2 + 5)  // das plus funktioniert nicht, weil es sich um ein String handelt
console.log(year2)
console.log("-----------------------")


console.log("Heute ist der " + dayOfMonth + ". " + monthName + " " + year1)
console.log("--------------------")


// let datum = (new Date()).toLocaleDateString()
// console.log(datum)

let tim = (new Date()).toLocaleTimeString()
console.log(tim)


// Nur das Jahr abfragen

let jahr = (new Date()).toLocaleDateString([ "fr"], {year: "numeric"})
console.log(jahr)
console.log("-------------------------------")
console.log("-------------------------------")

//  Nur der Monat abfragen
let monat = (new Date()).toLocaleDateString(["fr", "en"], {month: "long"})  // der Monat abfragen und speichern in der variable monat
console.log(monat)

// Der Tag des Monat abfragen

let tag = (new Date()).getDate()
console.log(tag)

// Jahr abfragen
let jahr1 = (new Date()).getFullYear()
console.log(jahr1)