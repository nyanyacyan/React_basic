// LoadingModal.js
import React from "react";
import './Contact.css';
const LoadingModal = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>お問い合わせを送信中...</p>
            </div>
        </div>
    );
};

export default LoadingModal;
