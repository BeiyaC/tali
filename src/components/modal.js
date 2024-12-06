import React from "react";

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <p className="mb-4 text-black">{message}</p>
                <button className="basic-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;