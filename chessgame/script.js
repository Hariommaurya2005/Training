// script.js

document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const pieces = {
        'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙',
        'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟'
    };
    const initialBoard = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];

    function createBoard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
                square.dataset.row = row;
                square.dataset.col = col;
                square.textContent = pieces[initialBoard[row][col]] || '';
                chessboard.appendChild(square);
            }
        }
    }

    function handlePieceMove(event) {
        const target = event.target;
        if (target.classList.contains('square')) {
            if (selectedSquare) {
                selectedSquare.textContent = '';
                target.textContent = selectedPiece;
                selectedSquare = null;
                selectedPiece = null;
            } else if (target.textContent) {
                selectedSquare = target;
                selectedPiece = target.textContent;
            }
        }
    }

    let selectedSquare = null;
    let selectedPiece = null;

    createBoard();
    chessboard.addEventListener('click', handlePieceMove);
});
