const grid_container = document.getElementById("grid_container");
const clearButton = document.getElementById("clearBtn");
const sizeInput = document.getElementById("sizeInput");
const sizeButton = document.getElementById("sizeBtn");

function makeGrid(grid_size){
    grid_container.style.gridTemplateColumns = `repeat( ${grid_size}, 1fr)`
    grid_container.style.gridTemplateRows = `repeat( ${grid_size}, 1fr)`;
    for (c = 0; c < (grid_size*grid_size); c++){
        let grid_cell = document.createElement('div');
        grid_cell.style.backgroundColor = 'white';
        grid_cell.className = 'grid_cell';
        grid_cell.addEventListener('mouseenter', () => {
            grid_cell.style.backgroundColor = 'black';
        });
        grid_container.appendChild(grid_cell);
    };
};

function clearGrid(){
    grid_container.innerHTML = null;
    makeGrid(size);
}

clearButton.addEventListener('click', () => {
    clearGrid();
})

sizeButton.addEventListener('click', () => {
    let inputNumber = sizeInput.value;
    if (inputNumber > 100){
        alert('Number Cannot Be Greater Than 100!');
        sizeInput.value = " ";
        sizeInput.focus();
        inputNumber = 16;
    }
   clearGrid();
   makeGrid(inputNumber);
})

let size = 16;
makeGrid(size);