import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого Место" />
      <div className="header__nav">
        <p className="header__profile-email">Email@mail.ru</p>
        <a className="header__link">Войти</a>
      </div>
    </header>
  );
}

export default Header;
