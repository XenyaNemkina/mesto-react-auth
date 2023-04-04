import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "./Header.js";
import auth from "../utils/auth.js";



function Login({handleShowInfoMessage, onLogin}) {
  const values = {email: "", password: ""}
  const navigate = useNavigate();

const [inputs, setInputs] = React.useState(values);

function handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    setInputs((state) => ({ ...state, [name]: value }))
  }

function handleSubmit(evt) {
  evt.preventDefault();
  auth
  .authorization(inputs)
  .then((res) => {
    if (res.jwt) localStorage.setItem("jwt", res.jwt);
    resetForm();
    onLogin();
    navigate("/")
  })
  .catch((err) => {
    handleShowInfoMessage({
      text: err.message || "Что-то пошло не так! Попробуйте еще раз.",
      isSuccess: false,
    });
  })
}

function resetForm() {
  setInputs({...values})
}

return(
  <>
  <Header><Link to="/sign-in" className="header__link">Войти</Link></Header>
    <main className="content">
      <section className="auth">
        <div className="auth__container">
          <h2 className="auth__title">Вход</h2>
          <form className="auth__form" onSubmit={handleSubmit}>
            <input className="popup__field auth__field" type="email" name="email" placeholder="Email" minLength="2" autoComplete="off" value={inputs.email} onChange={handleChange} required />
            <span className="popup__error popup__error_active"></span>
            <input className="popup__field auth__field" type="password" name="password" placeholder="Пароль" minLength="2" autoComplete="off" value={inputs.password} onChange={handleChange} required />
            <span className="popup__error popup__error_active"></span>
            <button type="submit" className="popup__save popup__save_auth-button">Войти</button>
          </form> 
        </div>
      </section>
    </main>
  </>
)
}
export default Login;
  