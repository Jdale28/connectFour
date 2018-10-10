var buttons = document.querySelectorAll('h3')
var clicked = false

// Ternary operator to switch display of sub buttons (Spencer helped out)
$('.mainButton').click(function() {
    clicked = !clicked
    return (clicked ? document.querySelector('.optionsContainer').style.display = "flex" : document.querySelector('.optionsContainer').style.display = "none")
})

// Change them from default to dark
var clicks = 0
$('#darkOrLightTheme').click(function() {
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