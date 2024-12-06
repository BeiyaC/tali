import React from "react";
import card from "../assets/bonusCard.png"

const Modal = ({ message, onClose, isCorrect }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <p className="mb-4 text-black">{message}</p>
                {
                    isCorrect &&
                    <div>
                        <img src={card} alt="Correct" className="mb-4"/>
                        <p className="mb-4 text-black">You can pick a bonus card !</p>
                    </div>

                }
                <button className="basic-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;