import React, { useState } from "react";
import TicTacToe from "./tic-tac-toe";
import Memory from "./memory";
import Header from "./header";

const Game = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleSelectGame = (game) => {
        setSelectedGame(game);
    };

    return (
        <div className="App">
            <Header />
            {!selectedGame && (
                <div className="buttonContainer">
                    <button
                        className="group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#9e58e9] to-blue-500 p-[2px] text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={() => handleSelectGame("tic-tac-toe")}
                    >
                        <span className="block rounded-sm bg-white px-6 py-2 group-hover:bg-transparent">Play TicTacToe</span>
                    </button>
                    <button
                        className="group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#9e58e9] to-blue-500 p-[2px] text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={() => handleSelectGame("memory")}
                    >
                        <span className="block rounded-sm bg-white px-6 py-2 group-hover:bg-transparent">Play Memory</span>
                    </button>
                </div>
            )}
            {selectedGame === "tic-tac-toe" && <TicTacToe />}
            {selectedGame === "memory" && <Memory />}
        </div>
    );
};

export default Game;