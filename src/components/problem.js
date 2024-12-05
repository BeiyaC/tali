import Header from "./header";
import React, { useState } from "react";

const Problem = () => {
    const colors = ["red", "blue", "red", "green"];
    const answers = [
        { key: 0, value: "Start" },
        { key: 1, value: "If Current Item Equals Red, Pick This Item" },
        { key: 2, value: "Move to Next Item" },
        { key: 3, value: "If More Items Exist, Repeat" },
        { key: 4, value: "Stop" }
    ];
    const possibilities = [
        { key: 4, value: "Stop" },
        { key: 3, value: "If More Items Exist, Repeat" },
        { key: 1, value: "If Current Item Equals Red, Pick This Item" },
        { key: 2, value: "Move to Next Item" },
        { key: 0, value: "Start" },
    ];
    const [choices, setChoices] = useState([]);
    const [bgColor, setBgColor] = useState("aliceblue");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const addToChoices = (possibility, index) => {
        setChoices([...choices, [possibility, index]]);
    };

    const removeFromChoices = (index) => {
        setChoices(choices.filter((_, i) => i !== index));
    };

    const extractFirstElements = (nestedArray) => {
        if (!Array.isArray(nestedArray)) {
            return [];
        }

        return nestedArray.map(subArray => {
            if (Array.isArray(subArray)) {
                return subArray[0];
            }
            return undefined;
        }).filter(element => element !== undefined);
    };


    const submit = () => {
        if (JSON.stringify(extractFirstElements(choices)) === JSON.stringify(answers)) {
            setBgColor("green");
        } else {
            setBgColor("red");
        }
        setIsSubmitted(true);
    };

    return (
        <div className="App">
            <Header/>
            <div className="p-4">
                <h3 className="text-lg font-bold mb-4">
                    Look at a list of blocks and pick out all the red ones.
                </h3>
                <div className="flex flex-wrap justify-center mb-4">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="w-16 h-16 m-2"
                            style={{backgroundColor: color}}
                        />
                    ))}
                </div>
                <div className="mb-4 gap-2" style={{backgroundColor: bgColor}}>
                    {choices.map((choice, index) => (
                        <button
                            key={choice.key}
                            class="group inline-flex items-center gap-2 rounded-full bg-[#e91e63] px-3 py-3 text-sm font-semibold text-white transition-all ease-in-out hover:shadow-lg hover:shadow-pink-500/40 active:scale-90 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => removeFromChoices(index)}
                            disabled={isSubmitted}
                        >
                            {choice[1]}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center mb-4">
                    {possibilities.map((possibility, index) => (
                        <button
                            key={possibility.key}
                            class="inline-flex flex-col items-center gap-2 rounded-full border border-[#7629c8] px-6 py-2 text-sm font-semibold text-[#7629c8] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={() => addToChoices(possibility , index+1)}
                            disabled={isSubmitted}
                        >
                            <p> {index + 1} </p>
                            <p> {possibility.value} </p>
                        </button>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        class="group inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#9e58e9] to-blue-500 p-[2px] text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={submit}
                        disabled={isSubmitted}>
                        <span className="block rounded-sm bg-white px-6 py-2 group-hover:bg-transparent">Submit</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Problem;