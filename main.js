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

// Column One click function
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

// Column Two click function
$('#a1').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[36].style.background != "red") {
        entireGame[36].style.background = "red"
        return
    } else if (entireGame[29].style.background != "red") {
        entireGame[29].style.background = "red"
        return
    } else if (entireGame[22].style.background != "red") {
        entireGame[22].style.background = "red"
        return
    } else if (entireGame[15].style.background != "red") {
        entireGame[15].style.background = "red"
        return
    } else if (entireGame[8].style.background != "red") {
        entireGame[8].style.background = "red"
        return
    } else if (entireGame[1].style.background != "red") {
        entireGame[1].style.background = "red"
        return
    }
})

// Column Three click function
$('#a2').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[37].style.background != "red") {
        entireGame[37].style.background = "red"
        return
    } else if (entireGame[30].style.background != "red") {
        entireGame[30].style.background = "red"
        return
    } else if (entireGame[23].style.background != "red") {
        entireGame[23].style.background = "red"
        return
    } else if (entireGame[16].style.background != "red") {
        entireGame[16].style.background = "red"
        return
    } else if (entireGame[9].style.background != "red") {
        entireGame[9].style.background = "red"
        return
    } else if (entireGame[2].style.background != "red") {
        entireGame[2].style.background = "red"
        return
    }
})

// Column Four click function
$('#a3').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[38].style.background != "red") {
        entireGame[38].style.background = "red"
        return
    } else if (entireGame[31].style.background != "red") {
        entireGame[31].style.background = "red"
        return
    } else if (entireGame[24].style.background != "red") {
        entireGame[24].style.background = "red"
        return
    } else if (entireGame[17].style.background != "red") {
        entireGame[17].style.background = "red"
        return
    } else if (entireGame[10].style.background != "red") {
        entireGame[10].style.background = "red"
        return
    } else if (entireGame[3].style.background != "red") {
        entireGame[3].style.background = "red"
        return
    }
})

// Column Five click function
$('#a4').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[39].style.background != "red") {
        entireGame[39].style.background = "red"
        return
    } else if (entireGame[32].style.background != "red") {
        entireGame[32].style.background = "red"
        return
    } else if (entireGame[25].style.background != "red") {
        entireGame[25].style.background = "red"
        return
    } else if (entireGame[18].style.background != "red") {
        entireGame[18].style.background = "red"
        return
    } else if (entireGame[11].style.background != "red") {
        entireGame[11].style.background = "red"
        return
    } else if (entireGame[4].style.background != "red") {
        entireGame[4].style.background = "red"
        return
    }
})

// Column Six click function
$('#a5').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[40].style.background != "red") {
        entireGame[40].style.background = "red"
        return
    } else if (entireGame[33].style.background != "red") {
        entireGame[33].style.background = "red"
        return
    } else if (entireGame[26].style.background != "red") {
        entireGame[26].style.background = "red"
        return
    } else if (entireGame[19].style.background != "red") {
        entireGame[19].style.background = "red"
        return
    } else if (entireGame[12].style.background != "red") {
        entireGame[12].style.background = "red"
        return
    } else if (entireGame[5].style.background != "red") {
        entireGame[5].style.background = "red"
        return
    }
})

// Column Seven click function
$('#a6').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[41].style.background != "red") {
        entireGame[41].style.background = "red"
        return
    } else if (entireGame[34].style.background != "red") {
        entireGame[34].style.background = "red"
        return
    } else if (entireGame[27].style.background != "red") {
        entireGame[27].style.background = "red"
        return
    } else if (entireGame[20].style.background != "red") {
        entireGame[20].style.background = "red"
        return
    } else if (entireGame[13].style.background != "red") {
        entireGame[13].style.background = "red"
        return
    } else if (entireGame[6].style.background != "red") {
        entireGame[6].style.background = "red"
        return
    }
})