import React from 'react';
import classes from './Header.module.css';
import img from '../../accets/headerLogo.svg';
import {Link} from "react-router-dom";

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
            <li><Link to={'/'}>О проекте</Link></li>
            <li><Link to={'/InformationForFestivalParticipants'}>Выставки</Link></li>
            <li><Link to={'/error'}>Организаторы<br/>фестиваля</Link></li>
            <li><Link to={'/error'}>Контакты</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;