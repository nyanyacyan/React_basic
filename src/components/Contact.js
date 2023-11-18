// Contact.js
import React, { useState } from "react";
import './Contact.css';

// userは格納するための箱みたいなもの
// ユーザーがフォームを入力するたびにhandleUser関数が呼び出され、userオブジェクトの対応するフィールドが新しい値で更新
const Contact = () => {
    const [user, setUser] = useState({name:"", Email:"", Comment:"",});
    const [errors, setErrors] = useState({ name: "", Email: "", Comment: "" });

    const handleUser = (e) => {
        setUser(({...user, [e.target.name]: e.target.value}));
        // prevは直前の状態のものを指す。つまり現在のuser（それぞれが空）の状態を指す
        // {...prev}は現在のuserオブジェクトのコピーを作成している。
        // [e.target.name]は'name''Email''Comment'を指している
        // [e.target.name]: e.target.valueで、特定のフィールドのみを新しい値で更新
        // eはイベントのe→関数を呼び出した側のアクションがあった時のことを指す
        // nameとは「name属性」のことを指す属性は「useState」にて定義する→関数を呼び出す側で「name属性」を指定する
    };

    const validateFields = () => {
        const newErrors = {};
        if(!user.name) newErrors.name = "※ 名前の入力は必須です。";
        if(!user.Email) newErrors.Email = "※ Emailの入力は必須です。";
        if(!user.Comment) newErrors.Comment = "※ コメントの入力は必須です。";
        setErrors(newErrors);

        // エラーがあればtrueを返す
        return Object.keys(newErrors).length > 0;
    }

    const emailSend = () => {
        if (validateFields()) return; // バリデーションチェック
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
        <div id="contact" className="Contact">
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
                            value={user.name} 
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                            type="text"
                            placeholder="name"
                        />
                        {errors.name && <p className="name-error-message">{errors.name}</p>}
                    </div>

                    <div className="EmailInput">
                        <input 
                            name="Email"
                            value={user.Email} 
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                            type="text"
                            placeholder="Email"
                            color="glay"
                        />
                        {errors.Email && <p className="Email-error-message">{errors.Email}</p>}
                    </div>

                    <div className="comment">
                        <textarea 
                            name="Comment"
                            className="commentrow"
                            placeholder="comment"
                            value={user.Comment} 
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                        ></textarea>
                        {errors.Comment && <p className="comment-error-message">{errors.Comment}</p>}
                    </div>

                    <div className="send">
                        <button onClick={emailSend}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;