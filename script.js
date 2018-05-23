console.log('hello')

// Global Array's and variables
let aiArray = []
let userArray = []
let gameRunning = false
let id
let color
let score = 0
let highScore = 0
let difficulty = 1000

//Sound Clips
const audio0 = new Audio('button-0.mp3')
const audio1 = new Audio('button-1.mp3')
const audio2 = new Audio('button-2.mp3')
const audio3 = new Audio('button-3.mp3')
const error = new Audio('PressYourLuckyWhammy.mp3')

// Computer input
$(document).ready(function () {
    // alert('Click start to begin game! Confused? Hit that Info button')
    $('.btn-success').click(function () {
        if (gameRunning == false) {
            gameRunning = true
            aiArray = []
            userArray = []
            score = 0
            $('#scoreNumber').text('0')
            startGame() // star game function



        }
    })

})
// Difficulty level
$('#easy').click(function () {
    difficulty = 1000
})
$('#medium').click(function () {
    difficulty = 750
})
$('#hard').click(function () {
    difficulty = 400
})

// Random Number Generator
let startGame = function () {
    let randomNumber = Math.floor(Math.random() * 4)
    aiArray.push(randomNumber)

    // loop through aiArray
    // for each item, wait 1000
    for (let i = 0; i < aiArray.length; i++) {
        setTimeout(function () {
            id = aiArray[i]
            // console.log(id)
            color = $('#' + id).attr('class').split(" ")[0] //method found on stackoverflow
            console.log(color)
            changeColor(color)
            soundEffect(id)
        }, difficulty * (i + 1))
    }
}

// Change color displayed
let changeColor = function (color) {
    $("." + color).toggleClass('highlight') // similar to the code found on stackoverflow

    setTimeout(function () {
        $("." + color).toggleClass('highlight') // similar to the code found on stackoverflow

    }, 500)
}

let soundEffect = function (id) {
    if (id == 0) {
        audio0.play()
    } else if (id == 1) {
        audio1.play()
    } else if (id == 2) {
        audio2.play()
    } else if (id == 3) {
        audio3.play()
    }
}
// Player Input
$('.button').click(function () {
    id = $(this).attr('id') //similar code to the one found on stackoverflow
    // console.log(id)
    userArray.push(Number(id))
    soundEffect(id)
    console.log('user input is ', userArray)
    if (userArray.length == aiArray.length) {
        arrayChecker()
    }
}
)


// Checking if array's are the same

let arrayChecker = function () {
    let nextRound = false
    for (let i = 0; i < aiArray.length; i++) {
        // console.log("inside for")
        // console.log("i is: " + i, "userArray: " + userArray[i],"aiArray: " + aiArray[i],)
        if (aiArray[i] !== userArray[i]) {
            console.log("wrong")
            nextRound = false
            gameOver()
            break
        } else if (aiArray[i] == userArray[i]) {
            console.log('correct')
            score = userArray.length
            $('#scoreNumber').text(score)
            if (score > highScore) {
                highScore = score
                $('#highestScoreNumber').text(highScore)
            }
            nextRound = true
        }
    }
    if (nextRound === true) {
        nextRound = false
        userArray = []
        setTimeout(function() {startGame()
        }, 200)
    }
}

// GAMEOVER

let gameOver = function () {
    $('#scoreNumber').text('##')
    highScore = score - 1
    $('#highestScoreNumber').text(highScore)
    error.play()
    gameRunning = false
    setTimeout(function () {
        alert('Sorry, that was wrong. Press start to play again!')
    }, 1000)

}
