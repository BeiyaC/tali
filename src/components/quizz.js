import React, { useState, useEffect } from "react";
import Header from "./header";
import Modal from "./modal";

const Quizz = () => {
    const questions = [
        {
            question: "What is the best programming language?",
            possibilities: ["Python", "Ruby", "Java", "C++", "Rust"],
            answer: "Python"
        },
        {
            question: "Which company created the Java programming language?",
            possibilities: ["Microsoft", "Google", "Sun Microsystems", "Apple"],
            answer: "Sun Microsystems"
        },
        {
            question: "What does “open source” software mean?",
            possibilities: [
                "It is free to use and its code is available for anyone to modify.",
                "It only works on specific computers.",
                "It is a trial version of software."
            ],
            answer: "It is free to use and its code is available for anyone to modify."
        },
        {
            question: "What is the main purpose of a programming language?",
            possibilities: [
                "To make coffee.",
                "To communicate with a computer.",
                "To design clothes.",
                "To build houses."
            ],
            answer: "To communicate with a computer"
        },
        {
            question: "What does “bug” mean in coding?",
            possibilities: [
                "An insect in your computer.",
                "A hardware issue.",
                "An error in the code.",
                "A new feature."
            ],
            answer: "An error in the code."
        },
        {
            question: "What does the term “debugging” mean in programming?",
            possibilities: [
                "Fixing errors in the code.",
                "Deleting old files.",
                "Writing new code.",
                "Installing software."
            ],
            answer: "Fixing errors in the code."
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [choice, setChoice] = useState("");
    const [bgColor, setBgColor] = useState("aliceblue");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
    }, []);

    const addToChoice = (choice) => {
        setChoice(choice);
    };

    const submit = () => {
        if (choice === currentQuestion.answer) {
            setBgColor("green");
            setModalMessage("Correct answer!");
        } else {
            setBgColor("red");
            setModalMessage("Wrong answer!");
        }
        setIsSubmitted(true);
        setShowModal(true);
    };

    return (
        <div className="App">
            <Header />
            <div>
                <h3>{currentQuestion.question}</h3>
                <div className="fillContainer">
                    <button
                        className="basic-button m-5 group inline-flex items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                        disabled={isSubmitted}
                    >
                        {choice}
                    </button>
                </div>
                <div className="buttonContainer">
                    {currentQuestion.possibilities?.map((possibility, index) => (
                        <button
                            key={index}
                            className="basic-button m-5 group inline-flex items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                            onClick={() => addToChoice(possibility)}
                            disabled={isSubmitted}
                        >
                            {possibility}
                        </button>
                    ))}
                </div>
                <div>
                    <button
                        className="basic-button m-5 group inline-flex items-center gap-2 rounded text-sm font-semibold transition-all hover:text-white hover:shadow-lg active:scale-95"
                        onClick={submit}
                        disabled={isSubmitted}
                    >
                        <span className="block rounded-sm px-6 py-2 group-hover:bg-transparent">Submit</span>
                    </button>
                </div>
            </div>
            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Quizz;