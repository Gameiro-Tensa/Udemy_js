"use strict"

const items = ["Obst", "Gemuse"]

for (const i in items) {
    if (i === "0") {
        continue
    }

    console.log("I:", typeof i, i)
}

for (let i = 0; i < items.length; i++) {
    if (i === 0) {
        continue
    }
    console.log("I:", typeof i, i)
}

// Variablen!

let sum = 0
const shoppingList = [123, 43, 50]

for (const shoppingItem of shoppingList) {
    sum = sum + shoppingItem
}

console.log("Die Summe ist: ", sum)