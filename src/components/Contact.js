// Contact.js
import React, { useState } from "react";
import './Contact.css';
import ContactModal from './ContactModal';
import LoadingModal from './LoadingModal';
import SuccessModal from './SuccessModal';

// userは格納するための箱みたいなもの
// ユーザーがフォームを入力するたびにhandleUser関数が呼び出され、userオブジェクトの対応するフィールドが新しい値で更新
const Contact = () => {
    const [user, setUser] = useState({name:"", Email:"", Comment:""});
    const [errors, setErrors] = useState({ name: "", Email: "", Comment: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
    };

    const handleOpenModal = () => {
        if(validateFields()) return;
        setIsModalOpen(true);
    };

    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    // };


    const emailSend = () => {
        if (validateFields()) return; // バリデーションチェック
        console.log('ただいま、メールを送信してます', user);
        setIsModalOpen(false);

        // ローディング状態にする
        setIsLoading(true);

        console.log('Sending:', user);  
        fetch('https://portfoliosite-405309.an.r.appspot.com/send-email', {
            // あなたのバックエンドのURLに置き換えてください
            // サーバーのURLに対して「/send-email」を加えて記載する→これによりサーバーが動く
            // httpリクエスト先を指定
            // 'https://portfoliosite-405309.an.r.appspot.com/send-email'
            // http://localhost:8000/send-email
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
            console.log('Received:', data); 
            // .thenは成功した時の処理を示す場合に使う。
            console.log('Success:', data);
            setIsLoading(false);
            setIsSuccess(true);
        })
        .catch((error) => {
            console.error('Request failed:', error);
            // .catchは失敗の時の処理を示す場合に使う。
            setIsLoading(false);
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
                            autoComplete="name"
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
                            autoComplete="email"
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
                            autoComplete="off"
                            className="commentrow"
                            placeholder="comment"
                            value={user.Comment} 
                            onChange={handleUser}
                            // ユーザーがフォーム要素の内容を変更するとonChangeイベントがトリガー
                        ></textarea>
                        {errors.Comment && <p className="comment-error-message">{errors.Comment}</p>}
                    </div>

                    <div className="send">
                        <button onClick={handleOpenModal}>送信内容を確認</button>
                    </div>
                </div>
            </div>
            <ContactModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formData={user}
                onSubmit={emailSend}
            />

            <LoadingModal isOpen={isLoading} />
            <SuccessModal isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
        </div>
    );
};


export default Contact;