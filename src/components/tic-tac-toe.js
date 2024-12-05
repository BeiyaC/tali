import React, { useState } from "react";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => {
        const winnerInfo = calculateWinner(board);
        const isWinningSquare = winnerInfo && winnerInfo.line.includes(index);
        return (
            <button
                className="squareTicTacToe"
                onClick={() => handleClick(index)}
                style={{ backgroundColor: isWinningSquare ? "green" : "white" }}
            >
                {board[index]}
            </button>
        );
    };

    const winnerInfo = calculateWinner(board);
    const isDraw = !winnerInfo && board.every(square => square !== null);
    const status = winnerInfo ? `Winner: ${winnerInfo.winner}` : isDraw ? "Draw" : `Next player: ${isXNext ? "X" : "O"}`;

    return (
        <div className="App">
            <div className="gameTicTacToe">
                <div className="status">{status}</div>
                <div className="boardTicTacToe" style={{ backgroundColor: isDraw ? "red" : "white" }}>
                    {board.map((_, index) => renderSquare(index))}
                </div>
                <button className="reset-button" onClick={() => setBoard(Array(9).fill(null))}>
                    Reset
                </button>
            </div>
        </div>
    );
};

const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], line };
        }
    }
    return null;
};

export default TicTacToe;