"use strict"

const courses = [
    ["Christian", "Annika"],        // Kurs 1 mit 2 Teilnehmern
    ["Julia", "Lisa", "Tobias"]     // Kurs 2 mit 3 Teilnehmern     
]

/**
 * Gibt den Index des Kurses mit den wegnigsten Teilnehmer 
 * @returns {number}
 */
function getSmallestCourse () {
    let smallestCourse = -1
    let smallestIndex = -1

    for (let i in courses) {
        let course = courses[i]

        if (smallestIndex === -1 || courses.length < smallestCourse) {
            smallestIndex = parseInt(i)
            smallestCourse = course.length
            
        }
    }
    return smallestIndex
}

console.log("getSmallestCourse(): ", getSmallestCourse())

/**
 * Füge einen Teilnehmer zum Sprachkurs mit an wenigsten Usern bisher hinzu
 * 
 * @param {string} name Der Teilnehmer der hinzugefügt werden soll
 * 
 * @returns {void}
 */
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

/**
 * Übersetzt ein Wort
 * @param {string} word Das Wort das übersetzt wird
 * @returns {string} Das übersetzte Wort
 */
function translateWord(word) {
    word = word.toLowerCase()
    for (let i = 0; i < LANGUAGE_DE.length; i++) {
        let currentWord = LANGUAGE_DE[i].toLowerCase()
        if (currentWord === word) {
            return LANGUAGE_EN[i]
        }
    }
    console.log("Das Wort wurde nicht gefunden")
    return word
}

console.log(translateWord("MikroFon"))

// teil b
/**
 * Wandeln die erste Buchstabe in Groß Buchstabe um
 * @param {string} word Das Wort das die erste Buchstabe umgewandelt wird
 * @returns {string} Das umgewandelnte Wort mit Groß Buchstabe am Anfang
 */

function ucFirst(word) {
    const firstLetter = word[0]
    const rest = word.slice(1)
    
    return firstLetter.toUpperCase() + rest
    // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
let mot = ucFirst("hallo")
console.log(mot)

// teil c

/**
 * Übersetzt einen Satz
 * @param {string} sentence Der Satz zu übersetzen
 * @returns {string} Der übersetzte Satz
 */
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