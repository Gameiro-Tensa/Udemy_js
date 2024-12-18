"use strict"

const courses = [
    ["Christian", "Annika"],        // Kurs 1 mit 2 Teilnehmern
    ["Julia", "Lisa", "Tobias"]     // Kurs 2 mit 3 Teilnehmern     
]

function getSmallestCourse () {
    let smallestCourse = -1
    let smallestIndex = -1

    for (let i in courses) {
        let course = courses[i]

        if (smallestIndex === -1 || courses.length < smallestCourse) {
            smallestIndex = i
            smallestCourse = course.length
            
        }
    }
    return smallestIndex
}

console.log("getSmallestCourse(): ", getSmallestCourse())

function addStudent(name) {
    const smallestCourse = getSmallestCourse()
    if (smallestCourse !== undefined) {
        courses[smallestCourse].push(name)
    }
}

addStudent("Max")
console.log(courses)

//  Aufgabe 2

const LANGUAGE_DE = ["hallo", "heute", "sprachkurs", "willkommen", "mikrofon", "und"]

const LANGUAGE_EN = ["hello", "today", "language course", "welcome", "microphone", "and"]

function translateWord(word) {
    // let firstWord = LANGUAGE_DE[0]
    // let lastWord = LANGUAGE_DE[LANGUAGE_DE.length - 1]
    word = word.toLowerCase()
    for (let i = 0; i < LANGUAGE_DE.length; i++) {
        let currentWord = LANGUAGE_EN[i]
        if (currentWord === word) {
            return LANGUAGE_EN[i]
        }
    }
    // console.log("Das Wort wurde nicht gefunden")
    return word
}

console.log(translateWord("MikroFon"))

// teil b

function ucFirst(word) {
    const firstLetter = word[0]
    const rest = word.slice(1)
    
    return firstLetter.toUpperCase() + rest
    // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
let mot = ucFirst("hallo")
console.log(mot)

// teil c
function translateSentence(sentence) {
    const words = sentence.split(" ")

    const translatedWords = []

    for (const word of words) {
        const translatedWord = translateWord(word)
        translatedWords.push(translatedWord)
    }

    const translatedSentence = translatedWords.join(" ")
    return ucFirst(translatedSentence)
}

console.log("translateSentence:", translateSentence("Hallo und willkommen beim Sprachkurs"))