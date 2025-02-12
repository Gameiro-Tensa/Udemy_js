"use strict"

// document.addEventListener("DOMContentLoaded", () => {

//     const counter = document.getElementById("counter-id")
//     const klickButton = document.getElementById("button-increment")
//     const resetButton = document.getElementById("button-reset")

//     /*
    
//     */

//     let counterValue = 0 // let counterValue = parseInt(counter.innerText, 10)

//     klickButton.addEventListener("click", () => {
//         console.log("Button wurde geklickt")
//         // klickButton.style.color = "blue"
//         counterValue ++
//         counter.innerText = counterValue
//     })

//     resetButton.addEventListener("click", () => {
//         console.log("Der Button Reset wurde geklickt!")
//         counterValue = 0
//         counter.textContent = counterValue
//     })
// })


document.addEventListener("DOMContentLoaded", () =>{

    const buttonIncrement = document.getElementById("button-increment")
    const buttonReset = document.getElementById("button-reset")
    const counterId = document.getElementById("counter-id")

    let currentCounter = 0
    buttonIncrement.addEventListener("click", () =>{
        console.log("Der Button Increment wurde geklickt")
        currentCounter++
        counterId.innerText = currentCounter
    })

    buttonReset.addEventListener("click", () =>{
        console.log("Der Button Reset wurde geklickt!")
        currentCounter = 0
        counterId.innerText = currentCounter
    })
})