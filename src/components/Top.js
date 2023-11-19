// Top.js
import React from "react";
import './Top.css';

const Top = () => {
    return(
        <div id="toppage" className="topcontainer">
            <div className="sky">
                <img src="バック.jpg" alt="背景" className="backboard"/>
                <img src="メインキャラ背景透過（キャラのみ）.png" alt="icon" className="icon"/>
                <h1>
                    にゃにゃちゃん's　Lab
                </h1>
            </div>
        </div>
    )
}

export default Top;