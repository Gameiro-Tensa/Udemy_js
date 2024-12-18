"use strict"

const items = [15, 25, 30]

function summe(liste) {
    let sum = 0
    for (let elment of liste) {
        sum = sum + elment
    }
    return sum
}

let itemsSum = summe(items)

// console.log("Die Summe ist S= " + summe(items))
console.log("Die Summe ist S= " + itemsSum)