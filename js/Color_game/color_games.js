let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1")

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

function pickColor() {
    let random = Math.floor((Math.random() * colors.length));
    return colors[random];
};

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

function randomColor() {
    // pick a red form 0 -255
    let red = Math.floor(Math.random() * 256)
    // pick a green from 0 -255
    let green = Math.floor(Math.random() * 256)
    // pick a blue from 0 -255
    let blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}