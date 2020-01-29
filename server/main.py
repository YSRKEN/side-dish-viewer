from flask import Flask, jsonify, request
from flask_cors import CORS
from requests_html import HTMLSession, HTMLResponse

app = Flask(__name__)
CORS(app)
session = HTMLSession()


@app.route('/api/login', methods=['POST'])
def login():
    # 指定したサイトに接続し、認証に必要なトークンを取得する
    redirect_from = 'https://oauth.qiita.com/auth/twitter?callback_action=login_or_signup&realm=qiita'
    # noinspection PyTypeChecker
    result: HTMLResponse = session.get(redirect_from)
    oauth_token = result.html.find('input#oauth_token', first=True).attrs['value']
    authenticity_token = result.html.find('input[name=authenticity_token]', first=True).attrs['value']
    redirect_after_login = result.html.find('input[name=redirect_after_login]', first=True).attrs['value']
    print(f'oauth_token={oauth_token}')
    print(f'authenticity_token={authenticity_token}')
    print(f'redirect_after_login={redirect_after_login}')

    # ログイン操作を行う
    username = request.form.get('username')
    password = request.form.get('password')
    print(f'username={username}')
    print(f'password={password}')
    post_body = {
           'authenticity_token': authenticity_token,
           'redirect_after_login': redirect_after_login,
           'oauth_token': oauth_token,
           'session[username_or_email]': username,
           'session[password]': password
    }
    twitter_oauth_url = "https://twitter.com/oauth/authorize"
    # noinspection PyTypeChecker
    result: HTMLResponse = session.post(twitter_oauth_url, data=post_body)
    redirect_to = result.html.find('.maintain-context', first=True).attrs['href']
    # noinspection PyTypeChecker
    result: HTMLResponse = session.get(redirect_to)
    with open('result.html', 'wb') as f:
        f.write(result.content)

    return jsonify({'result': 'OK'})


if __name__ == '__main__':
    app.run(port=8080, debug=True)
