import React from 'react';
import classes from "./Header.module.css";
import img from "./../../img/headerLogo.svg"

const Header = () => {
  return (
    <div className={classes.myHeader}>
      <div>
        <img src={img} alt=""/>
      </div>
      <div className={classes.menu}>
        <div className={classes.navbarWrap}>
          <div className={classes.textLogo}>
            Промышленный<br />дизайн
          </div>
          <div className={classes.navbar}>
            <nav>
              <ul>
                <li><a>О проекте</a></li>
                <li><a>Выставки</a></li>
                <li><a>Организаторы фестиваля</a></li>
                <li><a>Контакты</a></li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;