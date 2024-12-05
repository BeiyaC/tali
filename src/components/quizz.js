import Header from "./header";
import React, { useState } from "react";

const Quizz = () => {
    const question = "What is the best programming language ?"
    const answer = "Python"
    const possibilities = ["Python", "Ruby", "Java", "C++", "Rust"];
    const [choice, setChoice] = useState([]);
    const [bgColor, setBgColor] = useState("aliceblue");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const addToChoice = (choice) => {
        setChoice(choice);
    };

    const submit = () => {
        if (JSON.stringify(choice) === JSON.stringify(answer)) {
            setBgColor("green");
        } else {
            setBgColor("red");
        }
        setIsSubmitted(true);
    };

    return (
        <div className="App">
            <Header />
            <div>
                <h3>
                    {question}
                </h3>
                <div className="fillContainer" style={{backgroundColor: bgColor}}>
                        <button
                            className="caseButton"
                            disabled={isSubmitted}
                        >
                            {choice}
                        </button>
                </div>
                <div className="buttonContainer">
                    {possibilities.map((possibility, index) => (
                        <button
                            key={index}
                            className="caseButton"
                            onClick={() => addToChoice(possibility)}
                            disabled={isSubmitted}
                        >
                            {possibility}
                        </button>
                    ))}
                </div>
                <div>
                    <button className="caseButton" onClick={submit} disabled={isSubmitted}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quizz;