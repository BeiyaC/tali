import Header from "./header";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onButtonClick = async (page) => {
        switch (page) {
            case "problem": await navigate("/problem"); break;
            case "quizz": await navigate("/quizz"); break;
            case "game": await navigate("/game"); break;
            default: await navigate("/");
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="App-content">
                <h2>Hello mate, you are able to choose between our two different challenges.</h2>
                <div className="">
                    <p>You will have to answer a little question, it can be a good choice if you want to learn about the history of code.</p>
                    <div className="buttonContainer">
                        <button
                            className="basic-button group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#9e58e9] to-blue-500 p-[2px] text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => onButtonClick("quizz")}
                        >
                            <span className="block rounded-sm px-6 py-2 group-hover:bg-transparent">Let's quizz</span>
                        </button>
                    </div>
                </div>
                <div>
                    <p>You will have to play a little game, it can be a good choice if you want to learn about the history of code.</p>
                    <div className="buttonContainer">
                        <button
                            className="basic-button group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#9e58e9] to-blue-500 p-[2px] text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => onButtonClick("game")}
                        >
                            <span className="block rounded-sm  px-6 py-2 group-hover:bg-transparent">Let's play</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;