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
            let interval = setInterval(function () {
                for (i = 0; i <= aiArray.length; i++) {
                    if (i == aiArray.length) {
                        clearInterval(interval)
                        return
                    } else {
                        id = aiArray[i]
                        color = $('#' + id).attr('class')
                        console.log(id + " " + color)
                        changeColor(color)
                    }


                }
        }, 1000)


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
let changeColor = function (color) {
    

}

// Player Input