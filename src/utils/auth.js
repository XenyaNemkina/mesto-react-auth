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
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"},
        body: JSON.stringify({
          email,
          password
        }),
      })
     .then((response) => {
      return response.json()
     })
     .then((res) => {
      return res
     })
     .catch((err) => console.log(err))

    }
    
    authorization({email, password}) {
      return fetch(`${this._baseUrl}/signin`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"},
        body: JSON.stringify({
          email,
          password
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('jwt', data.jwt);
        return data;
      })
      .catch((err) => console.log(err))
      }
    
      getContent(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
            },
      })
      .then(res => res.json())
      .then(data => data)
    }}

const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
  });


export default auth;