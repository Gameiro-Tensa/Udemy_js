"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const titleElement = document.getElementById("title")
    titleElement.addEventListener("click", () => {
        titleElement.style.color = "blue"
        console.log("Ich wurde geklickt")
    })

    titleElement.addEventListener("mouseenter", () => {
        titleElement.innerText = "Hallo javaScript"
    })

    titleElement.addEventListener("mouseleave", () => {
        titleElement.innerText = "Ich wurde gefasst !!"
    })
})