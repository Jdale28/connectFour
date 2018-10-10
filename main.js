var buttons = document.querySelectorAll('h3')
var clicked = false

// Ternary operator to switch display of sub buttons (Spencer helped out)
$('.mainButton').click(function() {
    clicked = !clicked
    return (clicked ? document.querySelector('.optionsContainer').style.display = "flex" : document.querySelector('.optionsContainer').style.display = "none")
})

$('#darkOrLightTheme').click(function() {
    document.querySelector(".optionsContainer > #darkOrLightTheme").innerHTML = `Light Theme`
    document.body.style.background = "black"
    document.querySelector('h1').style.color = "white"
    document.querySelector('.gameContainer').style.border = "5px solid darkblue"
    document.querySelector('.gameContainer').style.background = "grey"
})