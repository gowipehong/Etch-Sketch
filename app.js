let board = document.querySelector('.board');
let gridSize = document.querySelector('#select');
let color ='black';
let click = false;

document.addEventListener('DOMContentLoaded', () =>{
    createGrid(16);

    document.querySelector('body').addEventListener('click', (e) =>{
        if(e.target.tagName != 'BUTTON'){
            click = !click;
            console.log(click);
            let draw = document.querySelector('#draw');
            if (click){
                draw.innerHTML = "You can start drawing";
            }else{
                draw.innerHTML = 'Youre not allowed to draw';
            }
        }
    });

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
        div.addEventListener('mousemove', colorDiv);
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

function colorDiv(){
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% ,50%)`
        } else{
            this.style.backgroundColor ='black';
        }
    }
}

function setColor(colorChoice){
   color = colorChoice;
}

function resetBoard(){
    let divS = document.querySelectorAll('div');
    divS.forEach((div) => div.style.backgroundColor ='white');
}

