import React, { useState } from "react";
import TicTacToe from "./tic-tac-toe";
import Memory from "./memory";
import Shifumi from "./shifumi";
import Header from "./header";

const Game = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleSelectGame = (game) => {
        setSelectedGame(game);
    };

    const handleNavigate = () => {
        window.location.href = "https://zeevkatz.github.io/scroll/";
    };

    return (
        <div className="App">
            <Header />
            {!selectedGame && (
                <div className="buttonContainer">
                    <button
                        className="basic-button m-5 group inline-flex flex-col items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                        onClick={() => handleSelectGame("tic-tac-toe")}
                    >
                        <span className="rye-regular block rounded-sm px-6 py-2 group-hover:bg-transparent">Play TicTacToe</span>
                        <span className="text-sm">(You have to choose a player to fight into this game)</span>
                    </button>
                    <button
                        className="basic-button m-5 group inline-flex flex-col items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                        onClick={() => handleSelectGame("memory")}
                    >
                        <span className="rye-regular block rounded-sm px-6 py-2 group-hover:bg-transparent">Play Memory</span>
                        <span className="text-sm">(You have to complete the game before the end of the timer)</span>

                    </button>
                    <button
                        className="basic-button m-5 group inline-flex flex-col items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                        onClick={handleNavigate}
                    >
                        <span className="rye-regular block rounded-sm px-6 py-2 group-hover:bg-transparent">Play Scroll</span>
                        <span className="text-sm">(You have to choose a player to fight into this game, winner pick a bonus card)</span>
                        <span className="text-sm">(BE CAREFUL, when you'll finish the game you will have to go back)</span>

                    </button>
                    <button
                        className="basic-button m-5 group inline-flex flex-col items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                        onClick={() => handleSelectGame("shifumi")}
                    >
                        <span className="rye-regular block rounded-sm px-6 py-2 group-hover:bg-transparent">Play Rock, Paper, Scissor</span>
                        <span className="text-sm">(You have to choose a player to fight into this game, winner pick a bonus card)</span>

                    </button>
                </div>
            )}
            {selectedGame === "tic-tac-toe" && <TicTacToe/>}
            {selectedGame === "memory" && <Memory/>}
            {selectedGame === "shifumi" && <Shifumi/>}
        </div>
    );
};

export default Game;