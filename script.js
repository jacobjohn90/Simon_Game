console.log('hello')

// Global Array's and variables
let aiArray = []
let userArray = []
let gameRunning = false
let id
let color
let score = 0
let highScore = 0
// if(localStorage.getItem('highScore') === null) {
//     localStorage.setItem("highscore",0)}; // found on stackoverflow!
let difficulty = 1000

//Sound Clips
const audio0 = new Audio('button-0.mp3')                // red chime
const audio1 = new Audio('button-1.mp3')                // green chime
const audio2 = new Audio('button-2.mp3')                // blue chime
const audio3 = new Audio('button-3.mp3')                // yellow chime
const error = new Audio('PressYourLuckyWhammy.mp3')     // chime when user gets sequence wrong
const correct = new Audio('level_up.mp3')               // chime when the entire user sequence is correct

// Computer input
$(document).ready(function () {
    alert('Click start to begin game! Confused? Hit that Info button')
    $('.btn-success').click(function () {
        if (gameRunning == false) {                     //start button becomes inactive during the game
            gameRunning = true
            aiArray = []
            userArray = []
            score = 0
            $('#scoreNumber').text('0')
            startGame()                                 // star game function
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
    score = aiArray.length
    $('#scoreNumber').text(score)
    if (score > highScore) {
        highScore = score
        $('#highestScoreNumber').text(highScore)
    }
    for (let i = 0; i < aiArray.length; i++) {          // loop through aiArray
        setTimeout(function () {                        // for each item, wait a certain amount of time, depending on difficulty
            id = aiArray[i]
            // console.log(id)
            color = $('#' + id).attr('class').split(" ")[0]  //method found on stackoverflow
            console.log(color)
            changeColor(color)
            soundEffect(id)
        }, difficulty * (i + 1))                        // difficulty level determines how long the setTimout will be
    }
}

// Change color displayed
let changeColor = function (color) {
    $("." + color).toggleClass('highlight')             // similar to the code found on stackoverflow

    setTimeout(function () {
        $("." + color).toggleClass('highlight')         // similar to the code found on stackoverflow

    }, 500)
}

// Sound effect after computer selection and user click
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
    id = $(this).attr('id')                             //similar code to the one found on stackoverflow
    userArray.push(Number(id))
    soundEffect(id)
    console.log('user input is ', userArray)
    arrayChecker()
})

// Checking if array's are the same
let arrayChecker = function () {
    let nextRound = false
    for (let i = 0; i < userArray.length; i++) {
        // console.log("inside for")
        // console.log("i is: " + i, "userArray: " + userArray[i],"aiArray: " + aiArray[i],)
        if (aiArray[i] !== userArray[i]) {
            console.log("wrong")
            nextRound = false
            gameOver()
            break
        } else if (aiArray.length == userArray.length) {
            console.log('correct')
            nextRound = true
            // score = aiArray.length
            // $('#scoreNumber').text(score)
            // if (score > parseInt(localStorage.getItem("highscore"))) {   //found this on stackoverflow
            //     localStorage.setItem("highscore", score);
            //     highScore = parseInt(localStorage.getItem("highscore"))
            //     $('#highestScoreNumber').text(highScore)
            //   }
        }
    }
    if (nextRound === true) {
        nextRound = false
        userArray = []
        correct.play()
        setTimeout(function () {
            startGame()
        }, 500)
    }
}

// GAMEOVER
let gameOver = function () {
    $('#scoreNumber').text('##')
    error.play()
    gameRunning = false
    setTimeout(function () {
        alert('Sorry, that was wrong. Press start to play again!')
    }, 1000)

}
