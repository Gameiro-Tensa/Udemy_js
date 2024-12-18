"use strict"

const items = [15, 25, 30]

/**
 * Berechnet die Summe der Zahlen in einer Liste
 * @param {number[]} liste Die Liste die aufsummiert wird
 * @returns {number} Die komplette Summe
 */

function summe(liste) {
    let sum = 0
    for (let element of liste) {
        sum += element
    }
    return sum
}

let itemSum = summe(items)
console.log(itemSum === 70) 