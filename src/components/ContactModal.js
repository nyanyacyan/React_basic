// ContactModal.js
import React from "react";
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, formData, onSubmit}) => {

    return (
        <div className={`modal ${isOpen ? "open" :""}`}>
            <div className="modal-content">
                <h2 className="modalH2">お問い合わせ内容</h2>
                {/* ここにフォームのデータを表示 */}
                <p className="modalName">名前: {formData.name}</p>
                <p className="modalEmail">Email: {formData.Email}</p>
                <p className="modalcomment">コメント: {formData.Comment}</p>
                <p className="confirm">こちらの内容でお間違いないでしょうか？</p>

                <button onClick={onSubmit} className="modalOnSubmit">送信する</button>
                <button onClick={onClose} className="modalOnClose">修正する</button>
            </div>
        </div>
    );
};

export default ContactModal;