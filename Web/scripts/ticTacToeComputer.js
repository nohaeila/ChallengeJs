let currentPlayer = 'X';
let gameOver = false;

function playerMove(cell) {
    if (!gameOver && cell.innerHTML === '') {
        cell.innerHTML = currentPlayer;
        checkWin();
        if (!gameOver) {
            setTimeout(computerMove, 500); // Ordinateur joue après 500ms
        }
    }
}

function computerMove() {
    const emptyCells = document.querySelectorAll('.cell:not(.occupied)');
    if (emptyCells.length === 0) return; // Vérifie s'il y a des cellules vides
    const randomCellIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomCellIndex];
    if (randomCell.innerHTML === '') { // Vérifie si la case est vide avant de placer le symbole
        randomCell.innerHTML = 'O'; // L'ordinateur joue toujours avec O
        randomCell.classList.add('occupied');
        checkWin();
    } else {
        computerMove(); // Si la case n'est pas vide, réessayer de choisir une autre case
    }
}


function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        const cells = document.querySelectorAll('.cell');
        if (cells[a].innerHTML !== '' && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            gameOver = true;
            document.getElementById('status').innerHTML = `${cells[a].innerHTML} wins!`;
            return;
        }
    }
    if (!Array.from(document.querySelectorAll('.cell')).some(cell => cell.innerHTML === '')) {
        gameOver = true;
        document.getElementById('status').innerHTML = 'It\'s a draw!';
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').innerHTML = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('occupied', 'x-winner', 'o-winner');
    });
    gameOver = false;
    currentPlayer = 'X';
    document.getElementById('status').innerHTML = `Player ${currentPlayer}'s turn`;
}