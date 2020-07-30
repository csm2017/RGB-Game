const squares = document.querySelectorAll('.square');
const squareContainer = document.getElementById('container');
const rgbDisplay = document.getElementById('rgbDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');

/***
 * FUNCTIONS
 */
const changeColors = color => {
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
};

const pickColor = () => {
    const num = Math.floor(Math.random() * colors.length);
    return colors[num];
};
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColors = num => {
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};



/**
 * INITIALIZE
 */
let colors = generateRandomColors(6);
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

    //Correct Answer!
    if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
    } 
    //Wrong Answer
    else {
        square.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
    }

});