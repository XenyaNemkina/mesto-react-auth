import React, { useContext } from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="auth">
        <div className="auth__container">
          <h2 className="auth__title">Регистрация</h2>
          <form className="auth__form">
            <input className="popup__field auth__field" type="email" name="email" placeholder="Email" minLength="2" autoComplete="off" required />
            <span className="popup__error popup__error_active"></span>
            <input className="popup__field auth__field" type="password" name="password" placeholder="Пароль" minLength="2" autoComplete="off" required />
            <span className="popup__error popup__error_active"></span>
            <button type="submit" className="popup__save popup__save_auth-button">Зарегистрироваться</button>
            <p className="auth__text">Уже зарегистрированы? <a className="auth__text sign-up__link">Войти</a></p>
          </form> 
          </div>
        </section>
      <section className="profile">
        <button className="profile__avatarbtn" type="button" onClick={onEditAvatar}></button>
        <img className="profile__avatar" src={currentUser.avatar} alt="фото профиля" />
        <div className="info">
          <div className="info__text">
            <h1 className="info__name">{currentUser.name}</h1>
            <p className="info__profession">{currentUser.about}</p>
          </div>
          <button className="info__button" type="button" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
