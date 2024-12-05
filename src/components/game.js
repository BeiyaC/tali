import React from "react";
import TicTacToe from "./tic-tac-toe"
import Memory from "./memory";
import Header from "./header";

const Game = () => {
    return (
        <div className="App">
            <Header />
            <TicTacToe />
            <Memory />

        </div>
    );
};

export default Game;