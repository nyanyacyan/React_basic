// SuccessModal.js
import React from "react";
import './Contact.css';
const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p>メール送信が完了しました。</p>
                <button onClick={onClose}>閉じる</button>
            </div>
        </div>
    );
};

export default SuccessModal;
