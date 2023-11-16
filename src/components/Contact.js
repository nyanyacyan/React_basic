// Contact.js
import React, { useState } from "react";
import './Contact.css';

// userは格納するための箱みたいなもの
// ユーザーがフォームを入力するたびにhandleUser関数が呼び出され、userオブジェクトの対応するフィールドが新しい値で更新
const Contact = () => {
    const [user, setUser] = useState({
        name:"",
        Email:"",
        Comment:"",
    });

    const handleUser = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
        // prevは直前の状態のものを指す。つまり現在のuser（それぞれが空）の状態を指す
        // {...prev}は現在のuserオブジェクトのコピーを作成している。
        // [e.target.name]は'name''Email''Comment'を指している
        // [e.target.name]: e.target.valueで、特定のフィールドのみを新しい値で更新
        // eはイベントのe→関数を呼び出した側のアクションがあった時のことを指す
        // nameとは「name属性」のことを指す属性は「useState」にて定義する→関数を呼び出す側で「name属性」を指定する
    };

    const emailSend = () => {
        console.log('ただいま、メールを送信してます', user);
    
        fetch('http://localhost:5000/send-email', {
            // あなたのバックエンドのURLに置き換えてください
            // サーバーのURLに対して「/send-email」を加えて記載する→これによりサーバーが動く
            // httpリクエスト先を指定
            method: 'POST',
            // HTTP リクエストのメソッド
            headers: {
                'Content-Type': 'application/json',
            },
            // サーバーへ送るファイルはJSONファイルであることを宣言
            body: JSON.stringify(user)
            // 送るデータをJSON形式に変換する
        })
        .then(response => response.json())
        .then(data => {
            // .thenは成功した時の処理を示す場合に使う。
            console.log('Success:', data);
        })
        .catch((error) => {
            // .catchは失敗の時の処理を示す場合に使う。
            console.error('Error:', error);
        });
    }

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
                            // この属性を指定してる。
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                            type="text"
                            placeholder="name"
                        />
                    </div>

                    <div className="EmailInput">
                        <input 
                            name="Email"
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                            type="text"
                            placeholder="Email"
                            color="glay"
                        />
                    </div>

                    <div className="comment">
                        <textarea 
                            name="Comment"
                            className="commentrow"
                            rows="4"
                            placeholder="comment"
                            value{...user.Comment}
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                        ></textarea>
                    </div>

                    <div className="send">
                        <button onclick={emailSend}>送信</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;