import React from 'react';
import classes from './Header.module.css';
import img from '../../img/headerLogo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__img}>
        <img src={img} alt=""/>
      </div>
      <div className={classes.header__menuWrap}>
        <div className={classes.header__menu}>
          <div className={classes.header__menu__title}>Промышленный<br/>дизайн</div>
          <ul className={classes.header__menu__list}>
            <li>О проекте</li>
            <li>Выставки</li>
            <li>Организаторы<br/>фестиваля</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;