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
            userArray=[]
            startGame() // star game function
            // console.log('start clicked')



        }
    })

})

// Random Number Generator
let startGame = function () {
    let randomNumber = Math.floor(Math.random() * 4)
    aiArray.push(randomNumber)
    console.log(aiArray)

    // loop through aiArray
    // for each item, wait 1000
    for (let i = 0; i < aiArray.length; i++) {
        setTimeout(function () {
            id = aiArray[i]
            console.log(id)
            color = $('#' + id).attr('class').split(" ")[0] //method found on stackoverflow
            console.log(color)
            changeColor(color)
        }, 1000 * (i + 1))
    }

    // let interval = setInterval(function () {
    //     for (i = 0; i <= aiArray.length; i++) {
    //         if (i == aiArray.length) {
    //             clearInterval(interval)
    //             return
    //         } else {
    //             id = aiArray[i]
    //             color = $('#' + id).attr('class').split(" ")[0] //method found on stackoverflow
    //             changeColor(color)
    //         }
    //     }


    // }, 1000)
    // userClick()
}

// Change color displayed
let changeColor = function (color) {
    if (color == 'red') {
        $('.red').css('backgroundColor', '#ff6666')
        $('.red').css('border', '1px solid white')
    } if (color == 'green') {
        $('.green').css('backgroundColor', '#66ff66')
        $('.green').css('border', '1px solid white')
    } if (color == 'blue') {
        $('.blue').css('backgroundColor', '#0066ff')
        $('.blue').css('border', '1px solid white')
    } if (color == 'yellow') {
        $('.yellow').css('backgroundColor', '#ffffcc')
        $('.yellow').css('border', '1px solid white')
    }
    setTimeout(function () {
        if (color == 'red') {
            $('.red').css('backgroundColor', 'red')
            $('.red').css('border', '1px solid black')
        } if (color == 'green') {
            $('.green').css('backgroundColor', 'green')
            $('.green').css('border', '1px solid black')
        } if (color == 'blue') {
            $('.blue').css('backgroundColor', 'blue')
            $('.blue').css('border', '1px solid black')
        } if (color == 'yellow') {
            $('.yellow').css('backgroundColor', 'yellow')
            $('.yellow').css('border', '1px solid black')
        }
    }, 500)


}

// Player Input
// let picColor = 
$('.button').click(function () {
    id = $(this).attr('id') //similar code to the one found on stackoverflow
    console.log(id)
    userArray.push(Number(id))
    console.log('user input is ' + userArray)
    if (aiArray.length == userArray.length) {
        arrayChecker()}
})


// Checking if array's are the same

let arrayChecker = function () {
    
        for (let i = 0; i < aiArray.length; i++) {
         if (aiArray[i] !== userArray[i]) {
            gameOver()
            break
         } else if (aiArray[i] == userArray[i]) {
            console.log('correct')
            userArray = []
            $('.score').html()
            score += 1
            $('#number').text(score)
            startGame()
            break
        }
    
}}

// GAMEOVER

let gameOver = function () {
    console.log('incorrect')
}

//Hover effect
