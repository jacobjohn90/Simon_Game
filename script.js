console.log('hello')

// Global Array's and variables
let aiArray = []
let userArray = []
let gameRunning = false
let id
let color
let score = 0
// Computer input
$(document).ready(function () {
    // alert('Click start to begin game! Confused? Hit that Info button')
    $('.startButton').click(function () {
        if (gameRunning == false) {
            // gameRunning = true
            aiArray = []
            userArray = []
            score = 0
            $('#scoreNumber').text('0')
            startGame() // star game function



        }
    })

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
        }, 1000 * (i + 1))
    }
}

// Change color displayed
let changeColor = function (color) {
    $("." + color).toggleClass('highlight')
    // if (color == 'red') {
    //     $('.red').css('backgroundColor', '#ff6666')
    //     $('.red').css('border', '1px solid white')
    // } if (color == 'green') {
    //     $('.green').css('backgroundColor', '#66ff66')
    //     $('.green').css('border', '1px solid white')
    // } if (color == 'blue') {
    //     $('.blue').css('backgroundColor', '#0066ff')
    //     $('.blue').css('border', '1px solid white')
    // } if (color == 'yellow') {
    //     $('.yellow').css('backgroundColor', '#ffffcc')
    //     $('.yellow').css('border', '1px solid white')
    // }
    setTimeout(function () {
    $("." + color).toggleClass('highlight')
        // if (color == 'red') {
        //     $('.red').css('backgroundColor', 'red')
        //     $('.red').css('border', '1px solid black')
        // } if (color == 'green') {
        //     $('.green').css('backgroundColor', 'green')
        //     $('.green').css('border', '1px solid black')
        // } if (color == 'blue') {
        //     $('.blue').css('backgroundColor', 'blue')
        //     $('.blue').css('border', '1px solid black')
        // } if (color == 'yellow') {
        //     $('.yellow').css('backgroundColor', 'yellow')
        //     $('.yellow').css('border', '1px solid black')
        // }
    }, 750)


}

// Player Input
$('.button').click(function () {
    id = $(this).attr('id') //similar code to the one found on stackoverflow
    // console.log(id)
    userArray.push(Number(id))
    console.log('user input is ', userArray)
    if (userArray.length == aiArray.length) {
        arrayChecker()
    }}
)


// Checking if array's are the same

let arrayChecker = function () {
    let nextRound = false
    for (let i=0; i < aiArray.length ; i++) {    
        // console.log("inside for")
        console.log("i is: " + i, "userArray: " + userArray[i],"aiArray: " + aiArray[i],)
        if (aiArray[i] !== userArray[i]) {
            console.log("wrong")
            nextRound = false
            gameOver() 
            break
        } if (aiArray[i] == userArray[i]) {
            console.log('correct')
            score = userArray.length
            $('#scoreNumber').text(score)
            nextRound = true
        }
    }
    
    if (nextRound === true) {
        nextRound = false
        userArray = []
        startGame()
    }
}

// GAMEOVER

let gameOver = function () {
    $('#number').text('##')
    alert('Sorry, that was wrong. Press start to play again!')
}

//Hover effect
// $('.red').hover(function(){
//     $('.red').toggleClass('highlightClick')
// })
// $('.green').hover(function(){
//     $('.green').toggleClass('highlightClick')
// })
// $('.blue').hover(function(){
//     $('.blue').toggleClass('highlightClick')
// })
// $('.yellow').hover(function(){
//     $('.yellow').toggleClass('highlightClick')
// })