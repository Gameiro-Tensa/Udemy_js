"use strict"

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        continue        // es wird auf 7 überspringen und bei den nächsten iteration durchgeführt
    }

    if (i === 9) {
        break   // wenn i 9 ist, wird die Schleife abgebrochen
    }

    console.log("i: ", i)
}

console.log("Die Schleife wurde auf 9 abgebrochen !!")