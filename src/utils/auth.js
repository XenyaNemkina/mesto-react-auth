class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

    _getResponseData(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    register({email, password}) {
      return fetch(`${this._baseUrl}/signup`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then(this._getResponseData);
    }
    
    authorization({email, password}) {
      return fetch(`${this._baseUrl}/signin`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then(this._getResponseData);
      }
    
    checkToken(jwt) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${jwt}`,
          "Content-Type": "application/json",
            },
      })
      .then(this._getResponseData);
    }}

const auth = new Auth({
  baseUrl: "https://mesto.nomoreparties.co",
  });


export default auth;