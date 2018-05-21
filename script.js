console.log('hello')

// Global Array's and variables
let aiArray = []
let userArray = []
let gameRunning = false
let id
let color
// Computer input
$(document).ready(function () {
    $('.startButton').click(function () {
        if (gameRunning == false) {
            // gameRunning = true
            startGame()
            console.log('start clicked')
            let i = 0
            color = $()
            changeColor()
           
        }
    })

})

// Random Number Generator
let startGame = function () {
    let randomNumber = Math.floor(Math.random() * 4)
    aiArray.push(randomNumber)
    console.log(aiArray)
}

// Change color displayed
let changeColor = function () {

}

// Player Input