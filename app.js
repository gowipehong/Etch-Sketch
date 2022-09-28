let board = document.querySelector('.board');
let gridSize = document.querySelector('#select');

document.addEventListener('DOMContentLoaded', () =>{
    createGrid(16);

    gridSize.addEventListener('click', () =>{
        let sizes = getSize();
        createGrid(sizes);
    });
});

function createGrid(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDiv = size * size;

    for(let i = 0; i < numDiv; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = "orange";
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let input = prompt('Please key in the desire size of the grid');
    let message = document.querySelector('#message');
    if (input === ''){
        message.innerHTML = 'Please key in an integer';
    }else if(input < -1 || input > 100){
        message.innerHTML = 'Do Provide number between 1 and 100'; 
    }
    else
        message.innerHTML=' You have selected a grid number!';
        return input;
}