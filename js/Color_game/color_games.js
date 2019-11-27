let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode")

init();

function init() {
    // mode event listeners
    setupModeButtons();
    // square listeners
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
        reset();
        })
    }
}

function setupSquares() {
    for(let i = 0; i < squares.length; i++) {
    //add click listeners to squares
        squares[i].addEventListener("click", function() {
        //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor)
                h1.style.backgroundColor = pickedColor
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
});

colorDisplay.textContent = pickedColor;

// changes all colors to the same if correct
function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
    // change each color to match given color
};

// picks correct color
function pickColor() {
    let random = Math.floor((Math.random() * colors.length));
    return colors[random];
};

// adds rgb colors to array
function generateRandomColors(num) {
    //make an array
    let arr = [];
    // add num random colors to arr
    for(let i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

// gets rgb numbers
function randomColor() {
    // pick a red form 0 -255
    let red = Math.floor(Math.random() * 256)
    // pick a green from 0 -255
    let green = Math.floor(Math.random() * 256)
    // pick a blue from 0 -255
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}