import React, { useState, useEffect } from "react";
import Timer from "./timer";

const Memory = () => {
    const initialCards = [
        "A", "A", "B", "B", "C", "C", "D", "D",
        "E", "E", "F", "F", "G", "G", "H", "H"
    ].sort(() => Math.random() - 0.5);

    const [cards, setCards] = useState(initialCards);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45); // 60 seconds timer

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
            alert("Time is over! You lost the game.");
        }
    }, [timeLeft]);

    useEffect(() => {
        if (matchedCards.length === cards.length) {
            alert("Congratulations! You have matched all the cards.");
        }
    }, [matchedCards]);

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

    return (
        <div className="App">
            {timeLeft > 0 && <Timer />}
            <div className="gameMemory mt-4">
                <div className="boardMemory grid gap-2 p-2 border-2 border-gray-300 bg-white">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`cardMemory flex items-center justify-center text-sm font-bold uppercase text-white shadow-md transition-all border-2 border-gray-300 ${flippedCards.includes(index) || matchedCards.includes(index) ? "bg-white text-black" : "bg-[url('./assets/house2.png')] bg-contain"}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {flippedCards.includes(index) || matchedCards.includes(index) ? card : ""}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Memory;