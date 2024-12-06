import React, { useState, useEffect } from "react";
import Timer from "./timer";
import Modal from "./modal";
import imgA from "../assets/c++.png";
import imgB from "../assets/python.png";
import imgC from "../assets/java.png";
import imgD from "../assets/ruby.png";
import imgE from "../assets/c-sharp.png";
import imgF from "../assets/javascript.png";
import imgG from "../assets/php.png";
import imgH from "../assets/rust.png";

const Memory = () => {
    const initialCards = [
        imgA, imgA, imgB, imgB, imgC, imgC, imgD, imgD,
        imgE, imgE, imgF, imgF, imgG, imgG, imgH, imgH
    ].sort(() => Math.random() - 0.5);

    const [cards, setCards] = useState(initialCards);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(50); // 60 seconds timer
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

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
            setModalMessage("Time is over! You lost the game.");
            setShowModal(true);
        }
    }, [timeLeft]);

    useEffect(() => {
        if (matchedCards.length === cards.length) {
            setModalMessage("Congratulations! You have matched all the cards.");
            setIsCorrect(true);
            setShowModal(true);
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
        setShowModal(false);
    };

    return (
        <div className="App">
            <div className="h-40">
                {!isCorrect && timeLeft > 0 && <Timer />}
            </div>

            <div className="gameMemory mt-4">
                <div className="boardMemory grid gap-2 p-2 border-2 border-gray-300 bg-white">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`cardMemory flex items-center justify-center text-sm font-bold uppercase text-white shadow-md transition-all border-2 border-gray-300 ${flippedCards.includes(index) || matchedCards.includes(index) ? "bg-white" : "bg-[url('./assets/house2.png')] bg-contain"}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {flippedCards.includes(index) || matchedCards.includes(index) ? <img src={card} alt="card" className="w-full h-full object-contain"/> : ""}
                        </div>
                    ))}
                </div>
            </div>

            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} isCorrect={isCorrect} />}
        </div>
    );
};

export default Memory;