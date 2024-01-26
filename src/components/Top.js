// Top.js
import React from "react";
import './Top.css';

const Top = () => {
    return(
        <div id="toppage" className="topcontainer">
            <div className="sky">
                <img src="backboard.png" alt="backboard" className="backboard"/>
                <img src="newimage.png" alt="icon" className="icon"/>
                <h1>
                    にゃにゃちゃん's<br />Lab
                </h1>
            </div>
        </div>
    )
}

export default Top;