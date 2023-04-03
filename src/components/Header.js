import React from "react";
import logo from "../images/logo.svg";

function Header({children, isWrappable}) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  function handleOpenMenu() {
    setIsMenuOpened((state) => !state);
  }


  return (
    <header className={"header" + (isWrappable ? "header__loggined" : "" )}>
      <img className="header__logo" src={logo} alt="лого Место" />
      
      {children && (
      <div className={"header__nav" + (isMenuOpened ? "header__menu_opened" : "")}>
        <p className="header__profile-email">Email@mail.ru</p>
        <a className="header__link">Войти</a>
      </div>)}
    </header>
  );
}

export default Header;
