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
            // console.log('start clicked')
            let interval = setInterval(function () {
                for (i = 0; i <= aiArray.length; i++) {
                    if (i == aiArray.length) {
                        clearInterval(interval)
                        return
                    } else {
                        id = aiArray[i]
                        color = $('#' + id).attr('class')
                        // console.log(id + " " + color)
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
    }, 750)


}

// Player Input