import React, { useState, useEffect } from "react";

const Memory = () => {
    const initialCards = [
        "A", "A", "B", "B", "C", "C", "D", "D",
        "E", "E", "F", "F", "G", "G", "H", "H"
    ].sort(() => Math.random() - 0.5);

    const [cards, setCards] = useState(initialCards);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer

    useEffect(() => {
        if (flippedCards.length === 2) {
            setIsDisabled(true);
            setTimeout(() => {
                const [firstIndex, secondIndex] = flippedCards;
                if (cards[firstIndex] === cards[secondIndex]) {
                    setMatchedCards([...matchedCards, firstIndex, secondIndex]);
                }
                setFlippedCards([]);
                setIsDisabled(false);
            }, 1000);
        }
    }, [flippedCards]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            setIsDisabled(true);
        }
    }, [timeLeft]);

    const handleCardClick = (index) => {
        if (isDisabled || flippedCards.includes(index) || matchedCards.includes(index)) return;
        setFlippedCards([...flippedCards, index]);
    };

    const resetGame = () => {
        setCards(initialCards.sort(() => Math.random() - 0.5));
        setFlippedCards([]);
        setMatchedCards([]);
        setTimeLeft(60); // Reset timer
        setIsDisabled(false);
    };

    const isGameComplete = matchedCards.length === cards.length;
    const boardColor = isGameComplete ? "green" : timeLeft === 0 ? "red" : "white";

    return (
        <div className="App">
            <div className="gameMemory">
                <div className="status">Time left: {timeLeft} seconds</div>
                <div className="boardMemory" style={{ backgroundColor: boardColor }}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`cardMemory ${flippedCards.includes(index) || matchedCards.includes(index) ? "flipped" : ""}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {flippedCards.includes(index) || matchedCards.includes(index) ? card : "?"}
                        </div>
                    ))}
                </div>
                <button className="reset-button" onClick={resetGame}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Memory;