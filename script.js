const grid_container = document.getElementById("grid_container");

function makeGrid(grid_size){
    grid_container.style.gridTemplateColumns = `repeat( ${grid_size}, 1fr)`
    grid_container.style.gridTemplateRows = `repeat( ${grid_size}, 1fr)`;
    for (c = 0; c < (grid_size*grid_size); c++){
        let grid_cell = document.createElement('div');
        grid_cell.style.backgroundColor = 'white';
        grid_cell.className = 'grid_cell';
        grid_cell.addEventListener('mouseenter', () => {
            grid_cell.style.backgroundColor = 'black';
        })
        grid_container.appendChild(grid_cell);
    };
};

let size = 16;
makeGrid(size);