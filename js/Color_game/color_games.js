let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn")
let hardBtn = document.querySelector("#hardBtn")



easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    };
});
resetButton.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    };
    h1.style.backgroundColor = "#232323"
    resetButton.textContent = "New Colors"
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

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
};

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