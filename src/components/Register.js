import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "./Header.js";
import auth from "../utils/auth.js";


function Register(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }


function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(formValue.email, formValue.password);
    }


return (
  <>
    <Header><Link to="/sign-up" className="header__link">Регистрация</Link></Header>
    <main className="content">
      <section className="auth">
        <div className="auth__container">
          <h2 className="auth__title">Регистрация</h2>
          <form className="auth__form" onSubmit={handleSubmit}>
            <input className="popup__field auth__field" type="email" name="email" placeholder="Email" minLength="2" autoComplete="off" value={formValue.email} onChange={handleChange} required />
            <span className="popup__error popup__error_active"></span>
            <input className="popup__field auth__field" type="password" name="password" placeholder="Пароль" minLength="2" autoComplete="off" value={formValue.password} onChange={handleChange} required />
            <span className="popup__error popup__error_active"></span>
            <button type="submit" className="popup__save popup__save_auth-button">Зарегистрироваться</button>
            <p className="auth__text">Уже зарегистрированы? <Link to="/sign-in" className="auth__text_link">Войти</Link></p>
          </form> 
          </div>
        </section>
    </main>
  </>
)
}

export default Register;