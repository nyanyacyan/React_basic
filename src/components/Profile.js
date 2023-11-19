// Profile.js
import React from "react";
import './Profile.css';

const Profile = () => {
    return(
        <div id="profile" className="aboutMe">
            <div className="mainProfile">
                <h2>
                    Profile
                </h2>

                <img src="メインキャラ背景透過.png" alt="icon"/>

                <p>
                    東京都在中の駆け出しのエンジニア。会社にてExcelなどを学び、資料などを作っていた経験からITの技術に惹かれ、日々、学びを行って発信などをしております。自動化に興味を持ち、Pythonを選考。「スクレイピング」「WEBページ作成」など業務を経験してきました。
                </p>
            </div>

            <div className="github-container">
                <a href="https://github.com/nyanyacyan" target="_blank" className="">GitHub</a>
            </div>

            <div className="qiita-container">
                <a href="https://qiita.com/nyanyacyan" target="_blank" className="qiita">Qiita</a>
            </div>


        </div>
    );
};


export default Profile;