let numberOfSquares = 6;
let colors = [];
let pickedColor;
let divs = document.querySelectorAll(".square");
let colorScoreBoard = document.querySelector("#pickedColor");
let choiceState = document.querySelector("#gameMenu");
let button = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let modeButtons = document.querySelectorAll(".mode");

button.addEventListener("click", reset);

init();

function init() {
     setUpModeButtons();
     setUpSquares();
     reset();
     
}

function reset() {
    h1.style.backgroundColor = "steelblue";
    button.textContent = "New colors";
    choiceState.textContent = "";
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickRandomColor();
    colorScoreBoard.textContent = pickedColor;
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = colors[i];
        if (colors[i]) {
            divs[i].style.display = "block";
            divs[i].style.backgroundColor = colors[i];
        } else {
            divs[i].style.display = "none";
        }
    }
}

function setUpModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[i].classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    for (let i = 0; i < divs.length; i++) {  
        divs[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                choiceState.textContent = "Correct !"
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.backgroundColor = pickedColor;
                }
                h1.style.backgroundColor = pickedColor;
                button.textContent = "Play Again ?";
            } else {
                this.style.backgroundColor = "#232323";
                choiceState.textContent = "Try again !"
            }
        })
    }
    
}

function pickRandomColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let colorsArray = [];
    for (let i = 0; i < num; i++) {
        colorsArray.push(randomColor());
    }
    return colorsArray;
}


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
