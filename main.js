// Variable to control whether or not a round has ended
var isEnded = false

// Variables and functions to create table
var arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
var idMaker = 0
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

// Prompt for player names upon load
$(document).ready(function () {
    var oneName = window.prompt("Player One, what's your name?", "Enter it here!")
    document.querySelector("#playerOne").innerHTML = oneName
    var twoName = window.prompt("Player Two, what's your name?", "Enter it here!")
    document.querySelector("#playerTwo").innerHTML = twoName
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

// Functions that control clicking columns and manipulating background of circles
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
                entireGame[cell].style.backgroundImage = "url('images/GnomeMale.jpg')"
                entireGame[cell].style.backgroundSize = "60px"
            } else {
                entireGame[cell].style.backgroundImage = "url('images/GnomeFemale.jpg')"
                entireGame[cell].style.backgroundSize = "55px"
                entireGame[cell].style.backgroundPosition = "center"
            }
        }
        // Turn political mode on (parody - Trump vs. Kim Jong Un)
        // if (politicalMode) {
        //     if (player === 1) {
        //         entireGame[cell].style.backgroundImage = "url('images/AmericanFlag.png')"
        //         entireGame[cell].style.backgroundSize = "100px"
        //     } else {
        //         entireGame[cell].style.backgroundImage = "url('images/KoreanFlag.png')"
        //         entireGame[cell].style.backgroundSize = "100px"
        //     }
        // }
        if (politicalMode) {
            if (player === 1) {
                entireGame[cell].style.backgroundImage = "url('images/repElephant.jpg')"
                entireGame[cell].style.backgroundSize = "70px"
            } else {
                entireGame[cell].style.backgroundImage = "url('images/demDonkey.jpg')"
                entireGame[cell].style.backgroundSize = "60px"
            }
        }
        countTurns++
        arr[currI][currJ] = player
        winCheck()
        return true
    }
}

// Click functions divided by columns
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

// Check for win functions by directions
// Function to check winner horizontally
let scoreCount = 0

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
                        if (player === 1) {
                            playName = playerOne.innerHTML
                        } else if (player === 2) {
                            playName = playerTwo.innerHTML
                        }
                        swal("Congratulations!", `${playName} wins!`, `success`)
                    }, 1000)
                    setTimeout(function () {
                        trumpWins()
                    }, 3000)
                    setTimeout(function () {
                        kimWins()
                    }, 3000)
                    setTimeout(function () {
                        ogreTrollWin()
                    }, 3000)
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
                        if (player === 1) {
                            playName = playerOne.innerHTML
                        } else if (player === 2) {
                            playName = playerTwo.innerHTML
                        }
                        swal("Congratulations!", `${playName} wins!`, `success`)
                    }, 1000)
                    setTimeout(function () {
                        trumpWins()
                    }, 3000)
                    setTimeout(function () {
                        kimWins()
                    }, 3000)
                    setTimeout(function () {
                        ogreTrollWin()
                    }, 3000)
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
                        if (player === 1) {
                            playName = playerOne.innerHTML
                        } else if (player === 2) {
                            playName = playerTwo.innerHTML
                        }
                        swal("Congratulations!", `${player} wins!`, `success`)
                    }, 1000)
                    setTimeout(function () {
                        trumpWins()
                    }, 3000)
                    setTimeout(function () {
                        kimWins()
                    }, 3000)
                    setTimeout(function () {
                        ogreTrollWin()
                    }, 3000)
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
                        if (player === 1) {
                            playName = playerOne.innerHTML
                        } else if (player === 2) {
                            playName = playerTwo.innerHTML
                        }
                        swal("Congratulations!", `${player} wins!`, `success`)
                    }, 1000)
                    setTimeout(function () {
                        trumpWins()
                    }, 3000)
                    setTimeout(function () {
                        kimWins()
                    }, 3000)
                    setTimeout(function () {
                        ogreTrollWin()
                    }, 3000)
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
// Function to sets round scoring per player
function setScore(player) {
    if (player === 1) {
        document.querySelector('#playerOneScore').innerHTML = winOneCount
    } else {
        document.querySelector('#playerTwoScore').innerHTML = winTwoCount
    }
}
// Function to reset background of circles to beginning of game; does not reset accumulated round points
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

// Code that controls various available themes
// Ternary operator to switch display of sub buttons (Spencer helped out)
var clicked = false
$('.mainButton').click(function () {
    clicked = !clicked
    return (clicked ? document.querySelector('.optionsContainer').style.display = "flex" : document.querySelector('.optionsContainer').style.display = "none")
})

// Click function that calls reset game function
$('#resetButton').click(function () {
    resetGame()
})

// Functions that control changing the theme of the game
// Function that sets default style on theme removal clicks
var clicks = 0

function defaultStyling() {
    document.querySelector(".optionsContainer > #ogreOrNormalTheme").innerHTML = `Ogre Theme`
    document.querySelector(".optionsContainer > #politicalOrNormalTheme").innerHTML = `Political Theme`
    document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Dark Theme`
    document.body.style.background = "white"
    document.querySelector('#gameContainer').style.border = "5px solid green"
    document.querySelector('.pictureBoxOne').style.backgroundImage = ""
    document.querySelector('.pictureBoxOne').style.backgroundSize = ""
    document.querySelector('.pictureBoxTwo').style.backgroundImage = ""
    document.querySelector('.pictureBoxTwo').style.backgroundSize = ""
    document.querySelector('h1').style.color = "black"
    document.querySelector('#gameContainer').style.background = "black"
    document.querySelector('.playerName').style.background = "white"
    document.querySelector('#nameBox').style.color = "black"
    document.querySelector('#nameBox2').style.background = "white"
    document.querySelector('#nameBox2').style.color = "black"
    document.querySelector('#playerOneScore').style.color = "black"
    document.querySelector('#playerTwoScore').style.color = "black"
    document.querySelector('#gameContainer').style.backgroundImage = ""
    document.querySelector('#gameContainer').style.backgroundSize = ""
    document.querySelector('#gameContainer').style.backgroundPosition = ""
    document.querySelector('#gameContainer').style.padding = ""
}
// Change theme from default to dark
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
        // Change back to default theme
    } else {
        defaultStyling()
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
        document.querySelector('.pictureBoxOne').style.backgroundImage = "url('images/Ogre1.jpg')"
        document.querySelector('.pictureBoxOne').style.backgroundSize = "300px"
        document.querySelector('.pictureBoxTwo').style.backgroundImage = "url('images/Troll1.jpg')"
        document.querySelector('.pictureBoxTwo').style.backgroundSize = "300px"
        document.querySelector('#gameContainer').style.backgroundImage = "url(images/cauldron.jpg)"
        document.querySelector('#gameContainer').style.backgroundSize = "770px"
        document.querySelector('#gameContainer').style.backgroundPosition = "center"
        document.querySelector('#gameContainer').style.padding = "60px"
        ogreMode = true
        // Change back to default theme
    } else {
        defaultStyling()
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
        // document.querySelector('.pictureBoxOne').style.backgroundImage = "url('images/Trump.jpg')"
        document.querySelector('.pictureBoxOne').style.backgroundSize = "360px"
        // document.querySelector('.pictureBoxTwo').style.backgroundImage = "url('images/KimJongUn.jpg')"
        document.querySelector('.pictureBoxTwo').style.backgroundSize = "310px"
        politicalMode = true
        // Change back to default theme
    } else {
        defaultStyling()
        politicalMode = false
    }
    clicks++
})

// Function that controls outcome should Trump win in political mode
function trumpWins() {
    // Political Parody Kim vs. Trump
    // if (politicalMode && player === 1) {
    //     swal({
    //         title: `Trump made 'Murica "Great Again"`,
    //         text: "He also changed the Constitution so he's president forever",
    //         icon: "images/northAmerica.jpg",
    //         button: "Well... Shit."
    //     })
    // }
    if (politicalMode && player === 1) {
        swal({
            title: `Republicans Win!`,
            icon: "images/elephant-giphy.gif",
            button: "That's one happy elephant."
        })
    }
}
// Function that controls outcome should Kim win in political mode
function kimWins() {
    // Political parody Kim vs. Trump
    // if (politicalMode && player === 2) {
    //     swal({
    //         title: "...Kim finally got what he wanted!",
    //         icon: "images/bomb.gif",
    //         button: "Well... Shit."
    //     })
    // }
    if (politicalMode && player === 2) {
        swal({
            title: "Democrats Win!",
            icon: "images/donkey-gif-6.gif",
            button: "Celebrate with parfait!"
        })
    }
}
// Function that controls outcome for Ogre mode
function ogreTrollWin() {
    if ((ogreMode && player === 2) || (ogreMode && player === 1)) {
        swal({
            title: "Doesn't matter Ogre or Troll",
            text: "Hobbit's for dinner",
            icon: "images/HobbitTrolls.gif",
            button: "Sorry, Bilbo."
        })
    }
}