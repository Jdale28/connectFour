var arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

var isEnded = false

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
$(document).ready ( function(){
    var oneName = window.prompt("Player One, what's your name?", "Enter it here!")
    document.querySelector("#playerOne").innerHTML = oneName
    var twoName = window.prompt("Player Two, what's your name?", "Enter it here!")
    document.querySelector("#playerTwo").innerHTML = twoName
 })


var buttons = document.querySelectorAll('h3')
var clicked = false

let color = "red"
var player = 0
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

$('#resetButton').click(function () {
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
        document.querySelector('#nameBox').style.color = "white"
        document.querySelector('#nameBox2').style.background = "black"
        document.querySelector('#nameBox2').style.color = "white"
        document.querySelector('#playerOneScore').style.color = "white"
        document.querySelector('#playerTwoScore').style.color = "white"
        // Change back to light
    } else {
        document.body.style.background = "white"
        document.querySelector('h1').style.color = "black"
        document.querySelector('#gameContainer').style.border = "5px solid green"
        document.querySelector('#gameContainer').style.background = "black"
        document.querySelector('.playerName').style.background = "white"
        document.querySelector('#nameBox').style.color = "black"
        document.querySelector('#nameBox2').style.background = "white"
        document.querySelector('#nameBox2').style.color = "black"
        document.querySelector('#playerOneScore').style.color = "black"
        document.querySelector('#playerTwoScore').style.color = "black"
        document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Dark Theme`
    }
    clicks++
})


// Change theme from default to ogre
var ogreMode = false
$('#ogreOrNormalTheme').click(function () {
    if (clicks === 0 || clicks % 2 === 0) {
        document.querySelector(".optionsContainer > #ogreOrNormalTheme").innerHTML = `Normal Theme`
        document.querySelector('h1').style.color = "red"
        document.querySelector('#gameContainer').style.border = "5px solid red"
        document.querySelector('.pictureBoxOne').style.backgroundImage = "url('Ogre1.jpg')"
        document.querySelector('.pictureBoxOne').style.backgroundSize = "300px"
        document.querySelector('.pictureBoxTwo').style.backgroundImage = "url('Troll1.jpg')"
        document.querySelector('.pictureBoxTwo').style.backgroundSize = "300px"
        ogreMode = true
        // Change back to normal
    } else {
        document.querySelector(".optionsContainer > #ogreOrNormalTheme").innerHTML = `Ogre Theme`
        document.querySelector('h1').style.color = "black"
        document.querySelector('#gameContainer').style.border = "5px solid green"
        document.querySelector('.pictureBoxOne').style.backgroundImage = ""
        document.querySelector('.pictureBoxOne').style.backgroundSize = ""
        document.querySelector('.pictureBoxTwo').style.backgroundImage = ""
        document.querySelector('.pictureBoxTwo').style.backgroundSize = ""
        ogreMode = false
    }
    clicks++
})


// Change theme from default to political
var politicalMode = false
$('#politicalOrNormalTheme').click(function () {
    if (clicks === 0 || clicks % 2 === 0) {
        document.querySelector(".optionsContainer > #politicalOrNormalTheme").innerHTML = `Normal Theme`
        document.querySelector('h1').style.color = "red"
        document.querySelector('#gameContainer').style.border = "5px solid red"
        document.querySelector('.pictureBoxOne').style.backgroundImage = "url('Trump.jpg')"
        document.querySelector('.pictureBoxOne').style.backgroundSize = "360px"
        document.querySelector('.pictureBoxTwo').style.backgroundImage = "url('KimJongUn.jpg')"
        document.querySelector('.pictureBoxTwo').style.backgroundSize = "310px"
        politicalMode = true
        // Change back to normal
    } else {
        document.querySelector(".optionsContainer > #politicalOrNormalTheme").innerHTML = `Political Theme`
        document.querySelector('h1').style.color = "black"
        document.querySelector('#gameContainer').style.border = "5px solid green"
        document.querySelector('.pictureBoxOne').style.backgroundImage = ""
        document.querySelector('.pictureBoxOne').style.backgroundSize = ""
        document.querySelector('.pictureBoxTwo').style.backgroundImage = ""
        document.querySelector('.pictureBoxTwo').style.backgroundSize = ""
        politicalMode = false
    }
    clicks++
})

// Checks directions for winners and results in player who won
var winOneCount = 0
var winTwoCount = 0
var winCheck = function () {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length + 1; j++) {
            if (arr[i][j] === 0 && arr[i][j] != undefined) {
                continue
            }
            horizontalCheck(i, j, player)
            verticalCheck(i, j, player)
            diagonalCheckAscend(i, j, player)
            diagonalCheckDescend(i, j, player)
        }
    }
}

// Functions that control clicking columns
var entireGame = document.querySelectorAll('.circle')
var countTurns = 0

var playOneBackground = "red"
var playTwoBackground = "blue"

function setPlayer() {
    if (countTurns % 2 === 0) {
        color = playOneBackground
        player = 1
    } else {
        color = playTwoBackground
        player = 2
    }
}



function setColor(cell, currI, currJ) {
    if (entireGame[cell].style.background === "") {
        entireGame[cell].style.background = color
        if (ogreMode) {
            if (player === 1) {
                entireGame[cell].style.backgroundImage = "url('GnomeMale.jpg')"
                entireGame[cell].style.backgroundSize = "60px"
            } else {
                entireGame[cell].style.backgroundImage = "url('GnomeFemale.jpg')"
                entireGame[cell].style.backgroundSize = "60px"
            }
        }
        if (politicalMode) {
            if (player === 1) {
                entireGame[cell].style.backgroundImage = "url('AmericanFlag.png')"
                entireGame[cell].style.backgroundSize = "100px"
            } else {
                entireGame[cell].style.backgroundImage = "url('KoreanFlag.png')"
                entireGame[cell].style.backgroundSize = "100px"
            }
        }
        countTurns++
        arr[currI][currJ] = player
        winCheck()
        return true
    }
}

// Column one click function
$('.0').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 35
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 0)) return
            x -= 7
        }
    }
})
// Column two click function
$('.1').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 36
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 1)) return
            x -= 7
        }
    }
})
// Column three click function
$('.2').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 37
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 2)) return
            x -= 7
        }
    }
})
// Column four click function
$('.3').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 38
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 3)) return
            x -= 7
        }
    }
})
// Column five click function
$('.4').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 39
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 4)) return
            x -= 7
        }
    }
})
// Column six click function
$('.5').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 40
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 5)) return
            x -= 7
        }
    }
})
// Column seven click function
$('.6').click(function () {
    if (isEnded === false) {
        setPlayer()

        var x = 41
        for (var i = 5; i >= 0; i--) {
            if (setColor(x, i, 6)) return
            x -= 7
        }
    }
})


let scoreCount = 0

function resetGame() {
    scoreCount = 0
    countTurns = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length + 1; j++) {
            arr[i][j] = 0
        }
    }
    for (let i = 0; i < 42; i++) {
        entireGame[i].style.background = ""
    }
    isEnded = false
}

function setScore(player) {
    if (player === 1) {
        document.querySelector('#playerOneScore').innerHTML = winOneCount
    } else {
        document.querySelector('#playerTwoScore').innerHTML = winTwoCount
    }
}

// Function to check winner horizontally
function horizontalCheck(i, j, player) {
    if (arr[i][j] === player) {
        scoreCount += 1
        if (arr[i][j + 1] && arr[i][j + 1] === player) {
            scoreCount += 1
            if (arr[i][j + 2] && arr[i][j + 2] === player) {
                scoreCount += 1
                if (arr[i][j + 3] && arr[i][j + 3] === player) {
                    scoreCount += 1
                    setTimeout(function () {
                        alert(`Player ${player} wins!`)
                    }, 1000)
                    isEnded = true
                    if (player === 1) {
                        winOneCount++
                    } else {
                        winTwoCount++
                    }
                    setScore(player)
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
}

// Function to check winner vertically
function verticalCheck(i, j, player) {
    if (arr[i][j] === player) {
        scoreCount += 1
        if (arr[i - 1] && arr[i - 1][j] === player) {
            scoreCount += 1
            if (arr[i - 2] && arr[i - 2][j] === player) {
                scoreCount += 1
                if (arr[i - 3] && arr[i - 3][j] === player) {
                    scoreCount += 1
                    setTimeout(function () {
                        alert(`Player ${player} wins!`)
                    }, 1000)
                    isEnded = true
                    if (player === 1) {
                        winOneCount++
                    } else {
                        winTwoCount++
                    }
                    setScore(player)
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
}

// Function to check winner diagonally ascending
function diagonalCheckAscend(i, j, player) {
    if (arr[i][j] === player) {
        scoreCount += 1
        if (arr[i - 1] && arr[i - 1][j + 1] && arr[i - 1][j + 1] === player) {
            scoreCount += 1
            if (arr[i - 2] && arr[i - 2][j + 2] && arr[i - 2][j + 2] === player) {
                scoreCount += 1
                if (arr[i - 3] && arr[i - 3][j + 3] && arr[i - 3][j + 3] === player) {
                    scoreCount += 1
                    setTimeout(function () {
                        alert(`Player ${player} wins!`)
                    }, 1000)
                    isEnded = true
                    if (player === 1) {
                        winOneCount++
                    } else {
                        winTwoCount++
                    }
                    setScore(player)
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
}

// Function to check winner diagonally descending
function diagonalCheckDescend(i, j, player) {
    if (arr[i][j] === player) {
        scoreCount += 1
        if (arr[i + 1] && arr[i + 1][j + 1] && arr[i + 1][j + 1] === player) {
            scoreCount += 1
            if (arr[i + 2] && arr[i + 2][j + 2] && arr[i + 2][j + 2] === player) {
                scoreCount += 1
                if (arr[i + 3] && arr[i + 3][j + 3] && arr[i + 3][j + 3] === player) {
                    scoreCount += 1
                    setTimeout(function () {
                        alert(`Player ${player} wins!`)
                    }, 1000)
                    isEnded = true
                    if (player === 1) {
                        winOneCount++
                    } else {
                        winTwoCount++
                    }
                    setScore(player)
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
}