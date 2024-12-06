import React, { useState } from "react";
import Modal from "./modal";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

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
                className={`middle none center h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-lg font-sans text-xl font-bold uppercase text-white transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 ${isWinningSquare ? "bg-green-500" : "bg-black"}`}
                onClick={() => handleClick(index)}
            >
                {board[index]}
            </button>
        );
    };

    const winnerInfo = calculateWinner(board);
    const isDraw = !winnerInfo && board.every(square => square !== null);
    const status = winnerInfo ? `Winner: ${winnerInfo.winner}` : isDraw ? "Draw" : `Next player: ${isXNext ? "X" : "O"}`;

    if (winnerInfo && !showModal) {
        setModalMessage(`Winner: ${winnerInfo.winner} can pick a bonus card !`);
        setShowModal(true);
    }

    if (isDraw && !showModal) {
        setModalMessage(`Draw: No one can pick card...`);
        setShowModal(true);
    }

    return (
        <div className="App">
            <div className="gameTicTacToe flex flex-col items-center">
                <div className="status mb-4 text-lg font-bold">{status}</div>
                <div className="boardTicTacToe grid grid-cols-3 gap-2 p-2 bg-white">
                    {board.map((_, index) => renderSquare(index))}
                </div>
                <button className="basic-button m-5 group inline-flex items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95" onClick={() => setBoard(Array(9).fill(null))}>
                    Reset
                </button>
            </div>
            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
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