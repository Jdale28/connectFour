var arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

var idMaker = 0
console.table(arr)

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length + 1; j++) {
        var div = document.createElement('div')
        div.setAttribute("id", idMaker)
        idMaker++
        div.setAttribute("class", j)
        div.classList.add("circle")
        document.getElementById("gameContainer").appendChild(div)
    }
}

// Prompt for names upon load
// $(document).ready ( function(){
//     var oneName = window.prompt("Player One, what's your name?", "Enter it here!")
//     document.querySelector("#playerOne").innerHTML = oneName
//     var twoName = window.prompt("Player Two, what's your name?", "Enter it here!")
//     document.querySelector("#playerTwo").innerHTML = twoName
//  })


var buttons = document.querySelectorAll('h3')
var clicked = false

let color = "red"

if (countTurns % 2 === 0) {
    color = "red"
    player = 2
} else {
    color = "blue"
    player = 1
}

// Ternary operator to switch display of sub buttons (Spencer helped out)
$('.mainButton').click(function () {
    clicked = !clicked
    return (clicked ? document.querySelector('.optionsContainer').style.display = "flex" : document.querySelector('.optionsContainer').style.display = "none")
})

$('#resetButton').click(function(){
    resetGame()
})

// Change theme from default to dark
var clicks = 0
$('#darkOrLightTheme').click(function () {
    if (clicks === 0 || clicks % 2 === 0) {
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Light Theme`
        document.body.style.background = "black"
        document.querySelector('h1').style.color = "blue"
        document.querySelector('#gameContainer').style.border = "5px solid darkblue"
        document.querySelector('#gameContainer').style.background = "grey"
        document.querySelector('.playerName').style.background = "black"
        document.querySelector('#nameBox').style.color="white"
        document.querySelector('#nameBox2').style.background="black"
        document.querySelector('#nameBox2').style.color="white"
        // Change back to light
    } else {
        document.body.style.background = "white"
        document.querySelector('h1').style.color = "black"
        document.querySelector('#gameContainer').style.border = "5px solid green"
        document.querySelector('#gameContainer').style.background = "black"
        document.querySelector('.playerName').style.background = "white"
        document.querySelector('#nameBox').style.color="black"
        document.querySelector('#nameBox2').style.background="white"
        document.querySelector('#nameBox2').style.color="black"
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Dark Theme`
    }
    clicks++
})

// Change theme from default to ogre - WIP
$('#ogreOrNormalTheme').click(function () {
    if (clicks === 0 || clicks % 2 === 0) {
        document.querySelector(".optionsContainer > #ogreOrNormalTheme").innerHTML = `Normal Theme`
        document.body.style.background = "black"
        document.querySelector('h1').style.color = "blue"
        document.querySelector('#gameContainer').style.border = "5px solid darkblue"
        document.querySelector('#gameContainer').style.background = "grey"
        document.querySelector('.playerName').style.background = "black"
        document.querySelector('#nameBox').style.color="white"
        document.querySelector('#nameBox2').style.background="black"
        document.querySelector('#nameBox2').style.color="white"
        // Change back to normal
    } else {
        document.body.style.background = "white"
        document.querySelector('h1').style.color = "black"
        document.querySelector('#gameContainer').style.border = "5px solid green"
        document.querySelector('#gameContainer').style.background = "black"
        document.querySelector('.playerName').style.background = "white"
        document.querySelector('#nameBox').style.color="black"
        document.querySelector('#nameBox2').style.background="white"
        document.querySelector('#nameBox2').style.color="black"
        document.querySelector(".optionsContainer > #ogreOrNormalTheme").innerHTML = `Ogre Theme`
    }
    clicks++
})

// Checks directions for winners and results in player who won
var winOneCount = 0
var winTwoCount = 0
var winCheck = function (num) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 0) {
                continue
            }
            p1horizontal(i, j)
            // p2horizontal(i, j)
            // p1vertical(i, j)
            // p2vertical(i, j)
            // p1diagonal(i, j)
            // p2diagonal(i, j)
        }
    }
}

// Functions that control clicking columns
var entireGame = document.querySelectorAll('.circle')
var countTurns = 0

// Column One click function
$('.0').click(function () {
    // winCheck()
    let color = "red"

    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[35].style.background === "") {
        entireGame[35].style.background = color
        countTurns++
        arr[5][0] = player
        winCheck()
        return
    }

    while (entireGame[28].style.background === "") {
        entireGame[28].style.background = color
        countTurns++
        arr[4][0] = player
        winCheck()
        return
    }
    while (entireGame[21].style.background === "") {
        entireGame[21].style.background = color
        countTurns++
        arr[3][0] = player
        winCheck()
        return
    }
    while (entireGame[14].style.background === "") {
        entireGame[14].style.background = color
        countTurns++
        arr[2][0] = player
        winCheck()
        return
    }
    while (entireGame[7].style.background === "") {
        entireGame[7].style.background = color
        countTurns++
        arr[1][0] = player
        winCheck()
        return
    }
    while (entireGame[0].style.background === "") {
        entireGame[0].style.background = color
        countTurns++
        arr[0][0] = player
        winCheck()
        return
    }
})
// Column Two click function
$('.1').click(function () {
    let color = "red"

    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[36].style.background === "") {
        entireGame[36].style.background = color
        countTurns++
        arr[5][1] = player
        winCheck()
        return
    }

    while (entireGame[29].style.background === "") {
        entireGame[29].style.background = color
        countTurns++
        arr[4][1] = player
        winCheck()
        return
    }
    while (entireGame[22].style.background === "") {
        entireGame[22].style.background = color
        countTurns++
        arr[3][1] = player
        winCheck()
        return
    }
    while (entireGame[15].style.background === "") {
        entireGame[15].style.background = color
        countTurns++
        arr[2][1] = player
        winCheck()
        return
    }
    while (entireGame[8].style.background === "") {
        entireGame[8].style.background = color
        countTurns++
        arr[1][1] = player
        winCheck()
        return
    }
    while (entireGame[1].style.background === "") {
        entireGame[1].style.background = color
        countTurns++
        arr[0][1] = player
        winCheck()
        return
    }
})
// Column Three click function
$('.2').click(function () {
    let color = "red"

    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[37].style.background === "") {
        entireGame[37].style.background = color
        countTurns++
        arr[5][2] = player
        winCheck()
        return
    }

    while (entireGame[30].style.background === "") {
        entireGame[30].style.background = color
        countTurns++
        arr[4][2] = player
        winCheck()
        return
    }
    while (entireGame[23].style.background === "") {
        entireGame[23].style.background = color
        countTurns++
        arr[3][2] = player
        winCheck()
        return
    }
    while (entireGame[16].style.background === "") {
        entireGame[16].style.background = color
        countTurns++
        arr[2][2] = player
        winCheck()
        return
    }
    while (entireGame[9].style.background === "") {
        entireGame[9].style.background = color
        countTurns++
        arr[1][2] = player
        winCheck()
        return
    }
    while (entireGame[2].style.background === "") {
        entireGame[2].style.background = color
        countTurns++
        arr[0][2] = player
        winCheck()
        return
    }
})
// Column Four click function
$('.3').click(function () {
    let color = "red"

    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[38].style.background === "") {
        entireGame[38].style.background = color
        countTurns++
        arr[5][3] = player
        winCheck()
        return
    }

    while (entireGame[31].style.background === "") {
        entireGame[31].style.background = color
        countTurns++
        arr[4][3] = player
        winCheck()
        return
    }
    while (entireGame[24].style.background === "") {
        entireGame[24].style.background = color
        countTurns++
        arr[3][3] = player
        winCheck()
        return
    }
    while (entireGame[17].style.background === "") {
        entireGame[17].style.background = color
        countTurns++
        arr[2][3] = player
        winCheck()
        return
    }
    while (entireGame[10].style.background === "") {
        entireGame[10].style.background = color
        countTurns++
        arr[1][3] = player
        winCheck()
        return
    }
    while (entireGame[3].style.background === "") {
        entireGame[3].style.background = color
        countTurns++
        arr[0][3] = player
        winCheck()
        return
    }
})
// Column Five click function
$('.4').click(function () {
    let color = "red"

    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[39].style.background === "") {
        entireGame[39].style.background = color
        countTurns++
        arr[5][4] = player
        winCheck()
        return
    }

    while (entireGame[32].style.background === "") {
        entireGame[32].style.background = color
        countTurns++
        arr[4][4] = player
        winCheck()
        return
    }
    while (entireGame[25].style.background === "") {
        entireGame[25].style.background = color
        countTurns++
        arr[3][4] = player
        winCheck()
        return
    }
    while (entireGame[18].style.background === "") {
        entireGame[18].style.background = color
        countTurns++
        arr[2][4] = player
        winCheck()
        return
    }
    while (entireGame[11].style.background === "") {
        entireGame[11].style.background = color
        countTurns++
        arr[1][4] = player
        winCheck()
        return
    }
    while (entireGame[4].style.background === "") {
        entireGame[4].style.background = color
        countTurns++
        arr[0][4] = player
        winCheck()
        return
    }
})
// Column Six click function
$('.5').click(function () {
    let color = "red"

    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[40].style.background === "") {
        entireGame[40].style.background = color
        countTurns++
        arr[5][5] = player
        winCheck()
        return
    }

    while (entireGame[33].style.background === "") {
        entireGame[33].style.background = color
        countTurns++
        arr[4][5] = player
        winCheck()
        return
    }
    while (entireGame[26].style.background === "") {
        entireGame[26].style.background = color
        countTurns++
        arr[3][5] = player
        winCheck()
        return
    }
    while (entireGame[19].style.background === "") {
        entireGame[19].style.background = color
        countTurns++
        arr[2][5] = player
        winCheck()
        return
    }
    while (entireGame[12].style.background === "") {
        entireGame[12].style.background = color
        countTurns++
        arr[1][5] = player
        winCheck()
        return
    }
    while (entireGame[5].style.background === "") {
        entireGame[5].style.background = color
        countTurns++
        arr[0][5] = player
        winCheck()
        return
    }
})
// Column Seven click function
$('.6').click(function () {
    let color = "red"
    if (countTurns % 2 === 0) {
        color = "red"
        player = 1
    } else {
        color = "blue"
        player = 2
    }

    while (entireGame[41].style.background === "") {
        entireGame[41].style.background = color
        countTurns++
        arr[5][6] = player
        winCheck()
        return
    }

    while (entireGame[34].style.background === "") {
        entireGame[34].style.background = color
        countTurns++
        arr[4][6] = player
        winCheck()
        return
    }
    while (entireGame[27].style.background === "") {
        entireGame[27].style.background = color
        countTurns++
        arr[3][6] = player
        winCheck()
        return
    }
    while (entireGame[20].style.background === "") {
        entireGame[20].style.background = color
        countTurns++
        arr[2][6] = player
        winCheck()
        return
    }
    while (entireGame[13].style.background === "") {
        entireGame[13].style.background = color
        countTurns++
        arr[1][6] = player
        winCheck()
        return
    }
    while (entireGame[6].style.background === "") {
        entireGame[6].style.background = color
        countTurns++
        arr[0][6] = player
        winCheck()
        return
    }
})

let scoreCount = 0

function resetGame() {
    scoreCount = 0
    countTurns = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length + 1; j++) {
            arr[i][j]=0
        }
    }
    for (let i = 0; i < 42; i++) {
            entireGame[i].style.background = ""
    }
}

// Win function player one horizontal
function p1horizontal (i, j){
    // let scoreCount = 0
    if (arr[i][j] === 1 && arr[i][j] != undefined) {
        scoreCount += 1
        if (arr[i][j + 1] === 1 && arr[i][j + 1] != undefined) {
            scoreCount += 1
            if (arr[i][j + 2] === 1 && arr[i][j + 2] != undefined) {
                scoreCount += 1
                if (arr[i][j + 3] === 1 && arr[i][j + 3] != undefined) {
                    scoreCount += 1
                    setTimeout(function() {
                        alert(`Player One wins!`)
                    }, 1000)
                    winOneCount++
                    document.querySelector('#playerOneScore').innerHTML = winOneCount
                    return
                } else {
                    scoreCount = 0
                }
            } else {
                scoreCount = 0
            }
        } else {
            scoreCount = 0
        }
    } else {
        scoreCount = 0
    }
    // console.log(scoreCount)
}

// // Win function player two horizontal
// function p2horizontal (i, j){
//     // let scoreCount = 0
//     if (arr[i][j] === 2 && arr[i][j] != undefined) {
//         scoreCount += 1
//         if (arr[i][j + 1] === 2 && arr[i][j + 1] != undefined) {
//             scoreCount += 1
//             if (arr[i][j + 2] === 2 && arr[i][j + 2] != undefined) {
//                 scoreCount += 1
//                 if (arr[i][j + 3] === 2 && arr[i][j + 3] != undefined) {
//                     scoreCount += 1
//                     setTimeout(function() {
//                         alert(`Player One wins!`)
//                     }, 1000)
//                     return
//                 } else {
//                     scoreCount = 0
//                 }
//             } else {
//                 scoreCount = 0
//             }
//         } else {
//             scoreCount = 0
//         }
//     } else {
//         scoreCount = 0
//     }
//     // console.log(scoreCount)
// }

// // Win function player one vertical
// function p1vertical (i, j){
//     // let scoreCount = 0
//     if (arr[i][j] === 1 && arr[i][j] != undefined) {
//         scoreCount += 1
//         if (arr[i-1][j] === 1 && arr[i-1][j] != undefined) {
//             scoreCount += 1
//             if (arr[i-2][j] === 1 && arr[i-2][j] != undefined) {
//                  scoreCount += 1
//                 if (arr[i-3][j] === 1 && arr[i-3][j] != undefined) {
//                     scoreCount += 1
//                     setTimeout(function() {
//                         alert(`Player One wins!`)
//                     }, 1000)
//                     return
//                 } else {
//                     scoreCount = 0
//                 }
//             } else {
//                 scoreCount = 0
//             }
//         } else {
//             scoreCount = 0
//         }
//     } else {
//         scoreCount = 0
//     }
// }

// // Win function player two vertical
// function p2vertical (i, j){
//     // let scoreCount = 0
//     if (arr[i][j] === 2 && arr[i][j] != undefined) {
//         scoreCount += 1
//         if (arr[i-1][j] === 2 && arr[i-1][j] != undefined) {
//             scoreCount += 1
//             if (arr[i-2][j] === 2 && arr[i-2][j] != undefined) {
//                  scoreCount += 1
//                 if (arr[i-3][j] === 2 && arr[i-3][j] != undefined) {
//                     scoreCount += 1
//                     setTimeout(function() {
//                         alert(`Player Two wins!`)
//                     }, 1000)
//                     return
//                 } else {
//                     scoreCount = 0
//                 }
//             } else {
//                 scoreCount = 0
//             }
//         } else {
//             scoreCount = 0
//         }
//     } else {
//         scoreCount = 0
//     }
// }

// // Win function player one diagonal
// function p1diagonal (i, j){
//     // let scoreCount = 0
//     if (arr[i][j] === 1 && arr[i][j] != undefined) {
//         scoreCount += 1
//         if (arr[i-1][j+1] === 1 && arr[i-1][j+1] != undefined) {
//             scoreCount += 1
//             if (arr[i-2][j+2] === 1 && arr[i-2][j+2] != undefined) {
//                  scoreCount += 1
//                 if (arr[i-3][j+3] === 1 && arr[i-3][j+3] != undefined) {
//                     scoreCount += 1
//                     setTimeout(function() {
//                         alert(`Player One wins!`)
//                     }, 1000)
//                     return
//                 } else {
//                     scoreCount = 0
//                 }
//             } else {
//                 scoreCount = 0
//             }
//         } else {
//             scoreCount = 0
//         }
//     } else {
//         scoreCount = 0
//     }
// }

// // Win function player one diagonal
// function p2diagonal (i, j){
//     // let scoreCount = 0
//     if (arr[i][j] === 2 && arr[i][j] != undefined) {
//         scoreCount += 1
//         if (arr[i-1][j+1] === 2 && arr[i-1][j+1] != undefined) {
//             scoreCount += 1
//             if (arr[i-2][j+2] === 2 && arr[i-2][j+2] != undefined) {
//                  scoreCount += 1
//                 if (arr[i-3][j+3] === 2 && arr[i-3][j+3] != undefined) {
//                     scoreCount += 1
//                     setTimeout(function() {
//                         alert(`Player Two wins!`)
//                     }, 1000)
//                     return
//                 } else {
//                     scoreCount = 0
//                 }
//             } else {
//                 scoreCount = 0
//             }
//         } else {
//             scoreCount = 0
//         }
//     } else {
//         scoreCount = 0
//     }
// }