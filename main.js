var arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

console.table(arr)

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

// Functions that control clicking columns
var entireGame = document.querySelectorAll('.circle')
var countTurns = 0

// Column One click function
$('#0').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[35].style.background === "") {
        entireGame[35].style.background = color
        countTurns++
        arr[5][0] = player
        return
    } 

    while (entireGame[28].style.background === "") {
        entireGame[28].style.background = color
        countTurns++
        arr[4][0] = player
        return
    } 
    while (entireGame[21].style.background === "") {
        entireGame[21].style.background = color
        countTurns++
        arr[3][0] = player
        return
    } 
    while (entireGame[14].style.background === "") {
        entireGame[14].style.background = color
        countTurns++
        arr[2][0] = player
        return
    } 
    while (entireGame[7].style.background === "") {
        entireGame[7].style.background = color
        countTurns++
        arr[1][0] = player
        return
    } 
    while (entireGame[0].style.background === "") {
        entireGame[0].style.background = color
        countTurns++
        arr[0][0] = player
        return
    }
})
// Column Two click function - Done
$('#1').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[36].style.background === "") {
        entireGame[36].style.background = color
        countTurns++
        arr[5][1] = player
        return
    } 

    while (entireGame[29].style.background === "") {
        entireGame[29].style.background = color
        countTurns++
        arr[4][1] = player
        return
    } 
    while (entireGame[22].style.background === "") {
        entireGame[22].style.background = color
        countTurns++
        arr[3][1] = player
        return
    } 
    while (entireGame[15].style.background === "") {
        entireGame[15].style.background = color
        countTurns++
        arr[2][1] = player
        return
    } 
    while (entireGame[8].style.background === "") {
        entireGame[8].style.background = color
        countTurns++
        arr[1][1] = player
        return
    } 
    while (entireGame[1].style.background === "") {
        entireGame[1].style.background = color
        countTurns++
        arr[0][1] = player
        return
    }
})
// Column Three click function - Done
$('#2').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[37].style.background === "") {
        entireGame[37].style.background = color
        countTurns++
        arr[5][2] = player
        return
    } 

    while (entireGame[30].style.background === "") {
        entireGame[30].style.background = color
        countTurns++
        arr[4][2] = player
        return
    } 
    while (entireGame[23].style.background === "") {
        entireGame[23].style.background = color
        countTurns++
        arr[3][2] = player
        return
    } 
    while (entireGame[16].style.background === "") {
        entireGame[16].style.background = color
        countTurns++
        arr[2][2] = player
        return
    } 
    while (entireGame[9].style.background === "") {
        entireGame[9].style.background = color
        countTurns++
        arr[1][2] = player
        return
    } 
    while (entireGame[2].style.background === "") {
        entireGame[2].style.background = color
        countTurns++
        arr[0][2] = player
        return
    }
})
// Column Four click function - Done
$('#3').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[38].style.background === "") {
        entireGame[38].style.background = color
        countTurns++
        arr[5][3] = player
        return
    } 

    while (entireGame[31].style.background === "") {
        entireGame[31].style.background = color
        countTurns++
        arr[4][3] = player
        return
    } 
    while (entireGame[24].style.background === "") {
        entireGame[24].style.background = color
        countTurns++
        arr[3][3] = player
        return
    } 
    while (entireGame[17].style.background === "") {
        entireGame[17].style.background = color
        countTurns++
        arr[2][3] = player
        return
    } 
    while (entireGame[10].style.background === "") {
        entireGame[10].style.background = color
        countTurns++
        arr[1][3] = player
        return
    } 
    while (entireGame[3].style.background === "") {
        entireGame[3].style.background = color
        countTurns++
        arr[0][3] = player
        return
    }
})
// Column Five click function
$('#4').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[39].style.background === "") {
        entireGame[39].style.background = color
        countTurns++
        arr[5][4] = player
        return
    } 

    while (entireGame[32].style.background === "") {
        entireGame[32].style.background = color
        countTurns++
        arr[4][4] = player
        return
    } 
    while (entireGame[25].style.background === "") {
        entireGame[25].style.background = color
        countTurns++
        arr[3][4] = player
        return
    } 
    while (entireGame[18].style.background === "") {
        entireGame[18].style.background = color
        countTurns++
        arr[2][4] = player
        return
    } 
    while (entireGame[11].style.background === "") {
        entireGame[11].style.background = color
        countTurns++
        arr[1][4] = player
        return
    } 
    while (entireGame[4].style.background === "") {
        entireGame[4].style.background = color
        countTurns++
        arr[0][4] = player
        return
    }
})
// Column Six click function
$('#5').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[40].style.background === "") {
        entireGame[40].style.background = color
        countTurns++
        arr[5][5] = player
        return
    } 

    while (entireGame[33].style.background === "") {
        entireGame[33].style.background = color
        countTurns++
        arr[4][5] = player
        return
    } 
    while (entireGame[26].style.background === "") {
        entireGame[26].style.background = color
        countTurns++
        arr[3][5] = player
        return
    } 
    while (entireGame[19].style.background === "") {
        entireGame[19].style.background = color
        countTurns++
        arr[2][5] = player
        return
    } 
    while (entireGame[12].style.background === "") {
        entireGame[12].style.background = color
        countTurns++
        arr[1][5] = player
        return
    } 
    while (entireGame[5].style.background === "") {
        entireGame[5].style.background = color
        countTurns++
        arr[0][5] = player
        return
    }
})
// Column Seven click function
$('#6').click(function () {
    let color = "red"
    let player = 1
    if (countTurns % 2 === 0){
        color = "blue"
        player = 2
    } else {
        color
        player = 1
    }

    while (entireGame[41].style.background === "") {
        entireGame[41].style.background = color
        countTurns++
        arr[5][6] = player
        return
    } 

    while (entireGame[34].style.background === "") {
        entireGame[34].style.background = color
        countTurns++
        arr[4][6] = player
        return
    } 
    while (entireGame[27].style.background === "") {
        entireGame[27].style.background = color
        countTurns++
        arr[3][6] = player
        return
    } 
    while (entireGame[20].style.background === "") {
        entireGame[20].style.background = color
        countTurns++
        arr[2][6] = player
        return
    } 
    while (entireGame[13].style.background === "") {
        entireGame[13].style.background = color
        countTurns++
        arr[1][6] = player
        return
    } 
    while (entireGame[6].style.background === "") {
        entireGame[6].style.background = color
        countTurns++
        arr[0][6] = player
        return
    }
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
// var columnOne = document.querySelectorAll('.rowOne')
// // var colOneText = [columnOne[0].innerHTML, columnOne[1].innerHTML, columnOne[2].innerHTML, columnOne[3].innerHTML, columnOne[4].innerHTML, columnOne[5].innerHTML, columnOne[6].innerHTML]
// var columnTwo = document.querySelectorAll('#rowTwo')
// var columnThree = document.querySelectorAll('#rowThree')
// var columnFour = document.querySelectorAll('#rowFour')
// var columnFive = document.querySelectorAll('#rowFive')
// var columnSix = document.querySelectorAll('#rowSix')