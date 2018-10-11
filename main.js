var arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length + 1; j++) {
        var div = document.createElement('div')
        div.setAttribute("id", j)
        div.classList.add("circle")
        document.getElementById("gameContainer").appendChild(div)
    }
}




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
    if (clicks === 0 || clicks % 2 === 0) {
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Light Theme`
        document.body.style.background = "black"
        document.querySelector('h1').style.color = "blue"
        document.querySelector('#gameContainer').style.border = "5px solid darkblue"
        document.querySelector('#gameContainer').style.background = "grey"
        // Change back to light
    } else {
        document.body.style.background = "white"
        document.querySelector('h1').style.color = "black"
        document.querySelector('#gameContainer').style.border = "5px solid green"
        document.querySelector('#gameContainer').style.background = "black"
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Dark Theme`
    }
    clicks++
})


var columnOne = document.querySelectorAll('.rowOne')
// var colOneText = [columnOne[0].innerHTML, columnOne[1].innerHTML, columnOne[2].innerHTML, columnOne[3].innerHTML, columnOne[4].innerHTML, columnOne[5].innerHTML, columnOne[6].innerHTML]
var columnTwo = document.querySelectorAll('#rowTwo')
var columnThree = document.querySelectorAll('#rowThree')
var columnFour = document.querySelectorAll('#rowFour')
var columnFive = document.querySelectorAll('#rowFive')
var columnSix = document.querySelectorAll('#rowSix')


var entireGame = document.querySelectorAll('.circle')

// Loop from i to get to j0, make it red if not red
// i[j][0] != red" make it red


// Column One click function
$('#0').click(function () {
    // entireGame[5].style.background = "red"
    if (entireGame[35].style.background != "red") {
        entireGame[35].style.background = "red"
        // return
    } else if (entireGame[28].style.background != "red") {
        entireGame[28].style.background = "red"
        // return
    } else if (entireGame[21].style.background != "red") {
        entireGame[21].style.background = "red"
        // return
    } else if (entireGame[14].style.background != "red") {
        entireGame[14].style.background = "red"
        // return
    } else if (entireGame[7].style.background != "red") {
        entireGame[7].style.background = "red"
        // return
    } else if (entireGame[0].style.background != "red") {
        entireGame[0].style.background = "red"
        // return
    }
    chkWinColOne()  
    return
})

// && (entireGame[21].style.background="red") && (entireGame[14].style.background="red"))
// var chkWinColOne = function () {
//     if (entireGame[35].style.background === "red" && entireGame[28].style.background === "red" && entireGame[21].style.background === "red") { 
//         alert("You win!")
//     } else if (entireGame[28].style.background==="red" && (entireGame[21].style.background==="red") && (entireGame[14].style.background==="red") && (entireGame[7].style.background==="red")) {
//         alert("You win!")
//     } else if (entireGame[21].style.background==="red" && (entireGame[14].style.background==="red") && (entireGame[7].style.background==="red") && (entireGame[0].style.background==="red")) {
//         alert("You win!")
//     }
// }




var countTurns = (-1)
// Column Two click function
$('#1').click(function () {
    countTurns++
    let color = "red"
    if (countTurns % 2 === 0 || countTurns === 0){
        color = "blue"
    } else {
        color
    }
    console.log(countTurns)
    console.log(color)

    if (countTurns === 0 || countTurns % 2 === 0 && entireGame[36].style.background != color) {
        entireGame[36].style.background = color
        console.log(countTurns)
        return

    } else if (entireGame[29].style.background != color || entireGame[29].style.background === "white") {
        // First iteration = Checks to see if equal to current color (red) and because it's white, it makes it red
        // Second iteration = Checks to see if equal to current color (blue) and because it's not blue (now red), it makes it blue
        entireGame[29].style.background = color
        console.log("Second Row")
        return
    } else if (entireGame[22].style.background != color || entireGame[22].style.background === "white") {
        entireGame[22].style.background = color
        console.log("Third Row")
        return
    } else if (countTurns % 2 === 0 && entireGame[15].style.background != color) {
        entireGame[15].style.background = color
        console.log(countTurns)
        return
    } else if (countTurns % 2 === 0 && entireGame[8].style.background != color) {
        entireGame[8].style.background = color
        console.log(countTurns)
        return
    } else if (countTurns % 2 === 0 && entireGame[1].style.background != color) {
        entireGame[1].style.background = color
        console.log(countTurns)
        return
    }

})

// Column Three click function
$('#2').click(function () {
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
$('#3').click(function () {
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
$('#4').click(function () {
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
$('#5').click(function () {
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
$('#6').click(function () {
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