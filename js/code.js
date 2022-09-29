

function createSquare(){
    const content =  document.querySelector(".content");
    const div = document.createElement('div');
    div.classList.add('square');
    content.appendChild(div);
    return div;
}

function createGrid(gridProportion){
    if(!isNaN(gridProportion)) deleteGrid();
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
    rgb = document.querySelector(".rgb-check");
    if(rgb.checked){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.cssText = `background: #${randomColor};`;
    } else {
        color = document.querySelector(".color-picker");
        this.style.cssText = `background: ${color.value};`;
    }

}


function getGridValueInput(){
    const input = document.querySelector('.input');
    const warning = document.querySelector('.warning-text');
    warning.textContent = "";
    if( isNaN(input.valueAsNumber) || input.valueAsNumber <= 0 || input.valueAsNumber > 100){
        warning.textContent = "Invalid value"
        return;
    }
    return input.valueAsNumber;
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    createGrid(getGridValueInput());
    pixelateGrid();
})



