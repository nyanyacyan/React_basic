// Contact.js
import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [user, setUser] = useState({
        name:"",
        Email:"",
        Comment:"",
    });

    const handleUser = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    return(
        <div className="Contact">
            <div className="base">
                <img src="壁紙.jpg" alt="壁紙"/>
                <h2>
                    Contact
                </h2>
                <p>
                    最後までご覧いただき、ありがとうございました。このサイトを通して私のことを少しでも知っていただけたのなら嬉しいです。もしこのサイトのことや私についてコメントなどがありましたら、お気軽に下記のフォームをご利用ください。
                </p>

                <div className="statusInput">
                    <div className="nameInput">
                        <input 
                            name="name"
                            onChange={handleUser}
                            type="text"
                            placeholder="name"
                        />
                    </div>

                    <div className="EmailInput">
                        <input 
                            name="Email"
                            onChange={handleUser}
                            type="text"
                            placeholder="Email"
                        />
                    </div>

                    <div className="comment">
                        <textarea className="comment" rows="4" placeholder="comment"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;