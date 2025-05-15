let container = document.querySelector('.container');
let body = document.querySelector('body');

// Create an initial 16 x 16 grid
createGrid(16);

// Create a grid based on 'x', an 'x' by 'x' grid.
function createGrid(size) {

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter', colorGrid);

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

// Mouse enter, color change
function colorGrid(e) {
    e.target.style.backgroundColor = 'red';
}

// Button to create a new grid.
let button = document.createElement('button');
button.innerHTML = 'New Grid';

// Add event to button
button.addEventListener('click', createNewGrid);

function createNewGrid() {
    deleteAllCells();
    let userInput = prompt("Enter the size of the grid. For instance if you enter 4, a 4x4 grid will be created. The grid cannot be larger than 100");
    let gridSize = parseInt(userInput, 10);

    // Validate input
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(gridSize);
}

body.insertBefore(button, container);

// Delete all cells
function deleteAllCells() {
    let cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.remove();
    })

    let rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        row.remove();
    })
}



















































// const container = document.querySelector('.container');

// for (let i = 0; i < 16; i++) {
//   const row = document.createElement('div');
//   row.classList.add('row');

//   for (let j = 0; j < 16; j++) {
//     const cell = document.createElement('div');
//     cell.classList.add('cell');
//     // cell.textContent = i * 16 + j + 1; 
//     row.appendChild(cell);
//   }

//   container.appendChild(row);
// }