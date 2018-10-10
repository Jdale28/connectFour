var buttons = document.querySelectorAll('h3')
var clicked = false

// Ternary operator to switch display of sub buttons (Spencer helped out)
$('.mainButton').click(function () {
    clicked = !clicked
    return (clicked ? document.querySelector('.optionsContainer').style.display = "flex" : document.querySelector('.optionsContainer').style.display = "none")
})

// Change them from default to dark
var clicks = 0
$('#darkOrLightTheme').click(function () {
    if (clicks == 0) {
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Light Theme`
        document.body.style.background = "black"
        document.querySelector('h1').style.color = "blue"
        document.querySelector('.gameContainer').style.border = "5px solid darkblue"
        document.querySelector('.gameContainer').style.background = "grey"
        // Change back to light
    } else {
        document.body.style.background = "white"
        document.querySelector('h1').style.color = "black"
        document.querySelector('.gameContainer').style.border = "5px solid green"
        document.querySelector('.gameContainer').style.background = "black"
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Dark Theme`
    }
    ++clicks
})


var columnOne = document.querySelectorAll('.rowOne')
// var colOneText = [columnOne[0].innerHTML, columnOne[1].innerHTML, columnOne[2].innerHTML, columnOne[3].innerHTML, columnOne[4].innerHTML, columnOne[5].innerHTML, columnOne[6].innerHTML]
var columnTwo = document.querySelectorAll('#rowTwo')
var columnThree = document.querySelectorAll('#rowThree')
var columnFour = document.querySelectorAll('#rowFour')
var columnFive = document.querySelectorAll('#rowFive')
var columnSix = document.querySelectorAll('#rowSix')


var entireGame = document.querySelectorAll('.circle')

$('#a0').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[35].style.background != "red") {
        entireGame[35].style.background = "red"
        return
    } else if (entireGame[28].style.background != "red") {
        entireGame[28].style.background = "red"
        return
    } else if (entireGame[21].style.background != "red") {
        entireGame[21].style.background = "red"
        return
    } else if (entireGame[14].style.background != "red") {
        entireGame[14].style.background = "red"
        return
    } else if (entireGame[7].style.background != "red") {
        entireGame[7].style.background = "red"
        return
    } else if (entireGame[0].style.background != "red") {
        entireGame[0].style.background = "red"
        return
    }
})