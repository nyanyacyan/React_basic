// Top.js
import React, { useState, useEffect } from "react";
import './Top.css';

const Top = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollY(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true});

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return(
        <div className="topcontainer">
            <div className="sky">
                <img src="バック.jpg" alt="背景"/>
                <h1>
                    にゃにゃちゃん's　Lab
                </h1>
            </div>
        </div>
    )
}

export default Top;