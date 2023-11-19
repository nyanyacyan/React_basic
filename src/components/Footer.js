// Footer.js
import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <div className="Footerbody">
            <h2>
                Thank you for looking!
            </h2>
            <p>
                ©︎2023 nyanyacyan
            </p>
            <div className="topReverse">
                <a href="#toppage" class="arrow-up" aria-label="トップページに戻る"></a>
            </div>
        </div>
    );
};


export default Footer;