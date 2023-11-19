// ContactModal.js
import React from "react";
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, formData, onSubmit}) => {
    return (
        <div className={`modal ${isOpen ? "open" :""}`}>
            <div className="modal-content">
                <h2 className="modalH2">ご確認</h2>
                {/* ここにフォームのデータを表示 */}
                <p className="modalName">名前: {formData.name}</p>
                <p className="modalEmail">Email: {formData.email}</p>
                <p className="modalcomment">コメント: {formData.comment}</p>

                <button onClick={onSubmit} className="modalOnSubmit">送信する</button>
                <button onClick={onClose} className="modalOnClose">修正する</button>
            </div>
        </div>
    );
};

export default ContactModal;