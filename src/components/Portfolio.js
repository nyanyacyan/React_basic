// Portfolio.js
import React from "react";
import './Portfolio.css';

const Portfolio = () => {
    return(
        <div id="portfolio" className="portfolio">
            <img src="壁紙.jpg" alt="壁紙"/>
            <h2>
                WORK
            </h2>
            <p className="portfolio1">
                ① <b>html生成アプリ</b><br />ブログのフォーマットからCSVファイルからデータを抽出して一括で入れ替えられるWEBアプリケーション。
            </p>
            <p className="portfolio2">
                ② <b>仮想通貨サイト スクレイピング</b><br />毎日、定時に特定のデータをスプレッドシートに追記していくシステムを構築。
            </p>
            <p className="portfolio3">
                ③ <b>にゃにゃちゃん’s Lab</b><br />Reactを活用したWEBサイトを作成。
            </p>
        </div>
    );
};


export default Portfolio;