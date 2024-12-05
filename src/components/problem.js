import Header from "./header";
import React, { useState } from "react";

const Problem = () => {
    const colors = ["red", "blue", "red", "green"];
    const answers = ["Start", "If Current Item Equals Red, Pick This Item", "Move to Next Item", "If More Items Exist, Repeat", "Stop"];
    const possibilities = ["If More Items Exist, Repeat", "Move to Next Item", "If Current Item Equals Red, Pick This Item", "Stop", "Start"];
    const [choices, setChoices] = useState([]);
    const [bgColor, setBgColor] = useState("aliceblue");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const addToChoices = (choice) => {
        setChoices([...choices, choice]);
    };

    const removeFromChoices = (index) => {
        setChoices(choices.filter((_, i) => i !== index));
    };

    const submit = () => {
        if (JSON.stringify(choices) === JSON.stringify(answers)) {
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
                    Look at a list of blocks and pick out all the red ones.
                </h3>
                <div className="squaresContainer">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: color,
                                height: "4rem",
                                width: "4rem",
                                margin: "2rem"
                            }}
                        />
                    ))}
                </div>
                <div className="fillContainer" style={{ backgroundColor: bgColor }}>
                    {choices.map((choice, index) => (
                        <button
                            key={index}
                            className="caseButton"
                            onClick={() => removeFromChoices(index)}
                            disabled={isSubmitted}
                        >
                            {choice}
                        </button>
                    ))}
                </div>
                <div className="buttonContainer">
                    {possibilities.map((possibility, index) => (
                        <button
                            key={index}
                            className="caseButton"
                            onClick={() => addToChoices(possibility)}
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

export default Problem;