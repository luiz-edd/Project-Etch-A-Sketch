

function createSquare(){
    const content =  document.querySelector(".content");
    const div = document.createElement('div');
    div.classList.add('square');
    content.appendChild(div);
    return div;
}

function createGrid(gridProportion){
    for(let i = 0;i<gridProportion; i++){
        let div = createSquare();
        for(let j = 0;j < gridProportion;j++){
            createSquareColumn(div);
        }
    }
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


createGrid(16);
pixelateGrid();

