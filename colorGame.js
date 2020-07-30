let colors = ['rgb(255, 0, 0)'
            ,'rgb(255, 255, 0)'
            ,'rgb(0, 255, 0)'
            ,'rgb(0, 255, 255)'
            ,'rgb(0, 0, 255)'
            ,'rgb(255, 0, 255)'];

const squares = document.querySelectorAll('.square');
const squareContainer = document.getElementById('container');
const rgbDisplay = document.getElementById('rgbDisplay');
const messageDisplay = document.getElementById('message');

/***
 * FUNCTIONS
 */
const changeColors = color => {
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

const pickColor = () => {
    const num = Math.floor(Math.random() * colors.length);
    return colors[num];
};

/**
 * INITIALIZE
 */
let pickedColor = pickColor();

rgbDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

/**
 * LISTENER
 */
squareContainer.addEventListener('click', e => {
    const square = e.target.closest('.square');
    const clickedColor = square.style.backgroundColor;

    if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
    } else {
        square.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
    }

});