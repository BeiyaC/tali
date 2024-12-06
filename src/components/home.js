import Header from "./header";
import { useNavigate } from "react-router-dom";
import challenge from "../assets/challenge.png"
import logo from "../assets/title.png";
import React from "react";

const Home = () => {
    const navigate = useNavigate();

    const onButtonClick = async (page) => {
        switch (page) {
            case "quizz": await navigate("/quizz"); break;
            case "game": await navigate("/game"); break;
            default: await navigate("/");
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="App-content flex-col m-5">
                <div className="flex flex-col items-center m-5">
                    <h2 className="rye-regular">Welcome to our Challenge Mode. You are able to choose between our two modes.</h2>
                    <img src={challenge} className="h-20 mt-5" alt="logo"/>
                </div>
                <div className="mt-5">
                    <p>You will have to answer a little question, it can be a good choice if you want to learn about the
                        history of code.</p>
                    <div className="buttonContainer">
                        <button
                            className="basic-button group inline-flex items-center gap-2 rounded p-[2px] text-sm transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => onButtonClick("quizz")}
                        >
                            <span className="rye-regular block rounded-sm px-6 py-2 group-hover:bg-transparent">Let's quizz</span>
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <p>You will have to play a little game, no code, only fun !</p>
                    <div className="buttonContainer">
                        <button
                            className="basic-button group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#9e58e9] to-blue-500 p-[2px] text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => onButtonClick("game")}
                        >
                            <span className="rye-regular block rounded-sm  px-6 py-2 group-hover:bg-transparent">Let's play</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;