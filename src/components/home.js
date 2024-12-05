import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();

    const onButtonClick = async (page) => {

        switch (page) {
            case "problem":await navigate("/problem"); break;
            case "quizz": await navigate("/quizz"); break
            case "game": await navigate("/game"); break
            default: await navigate("/");
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome to TALI game
                </p>
            </header>
            <div className="App-content">
                <h2>
                    Hello mate, you are able to choose between our two different challenges.
                </h2>
                <div>
                    <p>
                        You will have a problem to solve ! Don't worry about the difficulty.
                    </p>
                    <div className="buttonContainer">
                        <input
                            className="inputButton"
                            type="button"
                            onClick={() => onButtonClick("problem")}
                            value={"Let's code"}
                        />
                    </div>
                </div>
                <div>
                    <p>
                        You will have to answer to a little question, it can be a good choice if you want to learn about history
                        of code.
                    </p>
                    <div className="buttonContainer">
                        <input
                            className="inputButton"
                            type="button"
                            onClick={() => onButtonClick("quizz")}
                            value={"Let's quizz"}
                        />
                    </div>
                </div>
                <div>
                    <p>
                        You will have to play a little game, it can be a good choice if you want to learn about history
                        of code.
                    </p>
                    <div className="buttonContainer">
                        <input
                            className="inputButton"
                            type="button"
                            onClick={() => onButtonClick("game")}
                            value={"Let's play"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
