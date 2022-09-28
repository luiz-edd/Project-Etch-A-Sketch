

function createSquare(){
    const content =  document.querySelector(".content");
    const div = document.createElement('div');
    div.classList.add('square');
    content.appendChild(div);
    return div;
}

function createGrid(gridProportion){
    deleteGrid();
    for(let i = 0;i<gridProportion; i++){
        let div = createSquare();
        for(let j = 0;j < gridProportion;j++){
            createSquareColumn(div);
        }
    }
}

function deleteGrid(){
    const divs = document.querySelectorAll(".content div");
    divs.forEach( div => {
        div.remove();
    });
}


function createSquareColumn(parent){
    const div = document.createElement('div');
    div.classList.add('square-column');
    parent.appendChild(div);
}

function pixelateGrid(){
    const div = document.querySelectorAll(".square-column")
    div.forEach(div =>{
        div.addEventListener('mouseover', changeColor);
    })
}

function changeColor(e){
    this.style.cssText = "background: black;";
    console.log(this);
}


function getGridValueInput(){
    const input = document.querySelector('.input');
    console.log(input.textContent);
    return parseInt(input.value);
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    createGrid(getGridValueInput());
    pixelateGrid();
})



