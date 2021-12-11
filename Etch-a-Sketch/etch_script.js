const container = document.getElementById("container");
const button = document.getElementById('clrscr');
let isDrawing = false;
//let numbCells=30
let numbCells = prompt('give your choice : ');
let fraction=100/numbCells
let totalCells=numbCells*numbCells


function changeWrapperGrid(id) {
    var el = document.getElementById(id);
    el.style.gridTemplateColumns = "repeat("+numbCells+", "+fraction+"vw)";
    el.style.gridTemplateRows = "repeat("+numbCells+", "+fraction+"vh)";
  }


function makeGrid(CellNum) {

       
    for (r = 0; r < CellNum; r++) {
        let newCell = document.createElement("div");
        container.appendChild(newCell).className = "box";
        newCell.id="Cell"+r.toString();
        
    };

}; 

function clearGrid() {
    container.innerHTML = "";
    makeGrid (totalCells);    
};

document.addEventListener('mousedown', e => {
    
    isDrawing = true;
  });

document.addEventListener('mouseup', e => {
   if (isDrawing === true) {
    isDrawing = false;
   }
  });

document.addEventListener("mousemove", function(e){
        
      if ( isDrawing === true ) {  
        if (e.target.classList=="box") {
            document.getElementById(e.target.id).classList.add('box1');
        } 
        
    }
       });
  

document.addEventListener("keydown", function(e){
        console.log(e.key);
    if ( e.key == `Backspace` ) { 
        
        container.innerHTML = "";
        makeGrid (totalCells)};      
       });

changeWrapperGrid("container")

makeGrid(totalCells)

