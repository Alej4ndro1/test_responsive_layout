import React from 'react';
import './Header.scss';
import burgerMenu from '../../icons/burger.svg';
import admin from '../../icons/Admin.png';
import quit from '../../icons/QuitIcon.svg';

export const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <img
          src={burgerMenu}
          alt=""
          className="header__burgerMenu"
        />

        <div className="header__wrapper-desktop">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">Мероприятия</a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">Товары</a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">Клиенты</a>
              </li>
            </ul>
          </nav>

          <div className="user">
            <img
              src={admin}
              alt=""
              className="user__adminIcon"
            />
            <a href="/" className="user__adminEmail">admin@okguru.com</a>
            <img
              src={quit}
              alt=""
              className="user__quitIcon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
