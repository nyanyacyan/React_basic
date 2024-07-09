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
            ① <b>AWSによる24時間監視ツール</b><br /><br /> - クラウド環境で安心の監視システム - <br />
            クラウド環境の構築。特定のサイトを10分ごとにチェックし、新商品や新しい記事の情報を素早く取得。<br />
            （AWS Lambda、S3、API Gateway、AWS Cloud Shell、IAM、Step Function、EC2、CloudWatch）
            </p>
            <p className="portfolio2">
                ② <b>自動ログイン・再出品ツール</b><br /> - ログイン自動化と販売促進 - <br />
                サイトログインの自動化システム構築。<br />「reCAPTCHAあり」のサイトも可能です。<i>※全てのサイトに対応しているわけではありません。</i><br />
                ECサイトなどで販売促進のお手伝いをさせていただきます。
            </p>
            <p className="portfolio3">
                ③ <b>youtube文字起こし（翻訳機能付き）アプリ</b><br /> - 高精度な文字起こしと翻訳 - <br />
                「whisper」と「Chat GPT」を使った動画や音声データの翻訳ツール。高精度で文字起こしを提供。
            </p>
            <p className="portfolio4">
                ④ <b>GoogleマップAPIを使って情報取得</b><br /> - 地図情報を簡単に抽出 - <br />
                Googleマップのレビューや写真、位置情報などを抽出し、情報収集や販売促進に利用可能。ブログなど（WordPress）に使えるようにhtml生成も可能。
            </p>
            <p className="portfolio5">
                ⑤ <b>仮想通貨サイト スクレイピング</b><br /> - 仮想通貨データの自動収集 - <br />
                毎日、定時に特定のデータをスプレッドシートに追記していくシステムを構築。
            </p>
            <p className="portfolio6">
                ⑥ <b>通知機能システム構築</b><br /> - いつでもどこでも情報をキャッチ - <br />
                システムにLINE、ChatWork、Slackによる通知（画像添付含む）を組み込むシステムを構築。
            </p>
            <p className="portfolio7">
                ⑦ <b>html生成アプリ</b><br /> - ブログ運営の効率化 - <br />
                ブログのフォーマットからCSVファイルからデータを抽出して一括で入れ替えられるWEBアプリケーション。
            </p>
            <p className="portfolio8">
                ⑧ <b>にゃにゃちゃん’s Lab</b><br /> - Reactで作る楽しいWEBサイト - <br />
                Reactを活用したWEBサイトを作成。
            </p>
        </div>
    );
};


export default Portfolio;