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
            <p className="portfolio4">
                ④ <b>AWSによるクラウドシステム</b><br />クラウド環境の構築。<br />（AWS Lambda、S3、API Gateway、AWS Cloud Shell、IAM、Step Function）
            </p>
            <p className="portfolio5">
                ⑤ <b>自動ログインシステム構築</b><br />サイトログインの自動化システム構築。「reCHAPTCHAあり」のサイトも可能にしました。
            </p>
            <p className="portfolio6">
                ⑥ <b>LINE 通知機能システム構築</b><br />システムに「LINE」通知（画像添付含む）を組み込むシステムを構築。
            </p>
            <p className="portfolio7">
                ⑦ <b>ChatWork 通知機能システム構築</b><br />システムに「ChatWork」による通知（画像添付含む）を組み込むシステムを構築。
            </p>
            <p className="portfolio8">
                ⑧ <b>Slack 通知機能システム構築</b><br />システムに「Slack」による通知（画像添付含む）を組み込むシステムを構築。
            </p>
        </div>
    );
};


export default Portfolio;