from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
# Flaskを使うための宣言（初期化）

@app.route('/send-email', methods=['POST'])
# Flaskにおけるルーティングの宣言

def send_email():
    data = request.json
    # リクエストボディに含まれるJSONデータを自動的にPythonの辞書形式に変換

    name = data.get('name')
    email = data.get('Email')
    comment = data.get('Comment')

    # 送信先のメールアドレスはそれ専用を作成した方がいい
    sender_email = "nyanyachan.portfolio@gmail.com"
    receiver_email = "nyanyacyan@gmail.com"
    password = "syusyu39"

    # ここで示したmessageがメール全体を表す。
    message = MIMEMultipart("alternative")


    message["Subject"] = "新しいお問い合わせ"
    message["From"] = sender_email
    message["To"] = receiver_email

    # プレーンテキストとHTMLの両方を作成
    # text形式、html形式どちらも作成して送付するのが一般的

    text = f"""\
    名前: {name}
    Email: {email}
    コメント:
    {comment}
    """
    html = f"""\
    <html>
    <body>
        <p>名前: {name}<br>
        Email: {email}<br>
        コメント:<br>
        {comment}</p>
    </body>
    </html>
    """

    # プレーンテキストとHTMLバージョンの部分をメールに追加
    # MIMEText クラスを使って作成。
    # プレーンテキスト形式のメール部分（text）を作成　→　MIMEText(text, "plain") 右側の引数が属性
    # html形式のメール部分を作成→ MIMEText(html, "html") 右側の引数が属性
    # 引数text、引数htmlはそれぞれの形式に合わせてフォーマットを作成
    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    # messageはメール全体を表している。
    # .attachにてmessage(メール)に追加している
    message.attach(part1)
    message.attach(part2)

    # メール送信
    # Pythonの smtplib ライブラリを使って、GmailのSMTPサーバー（smtp.gmail.com）に安全な接続（SSL）を確立
    # ポート番号 465 は、SSLを使用するSMTPサーバーの標準的なポート
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        # 送信者のメールアドレス（sender_email）とパスワード（password）を使って、SMTPサーバーにログイン
        server.login(sender_email, password)

        # server.sendmail メソッドを使用して、実際にメールを送信
        server.sendmail(sender_email, receiver_email, message.as_string())

    # jsonify メソッドは、Pythonの辞書をJSON形式に変換してレスポンスを返す
    return jsonify({'message': 'メール送信完了'})

if __name__ == '__main__':
    app.run(debug=True)
