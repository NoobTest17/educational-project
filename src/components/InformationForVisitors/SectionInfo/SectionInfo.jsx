import React from 'react';
import classes from "./SectionInfo.module.css";
import lampWithGear from "../../../img/lampWithGear.svg";

const SectionInfo = () => {
  return (
    <div className={classes.IFVWrap}>
      <div className={classes.IFV}>
        <img src={lampWithGear}/>
        <div className={classes.IFV__information}>
          <h1>Информация для<br/>посетителей фестиваля</h1>
          <div className={classes.IFV__information__body}>
            <h5>События обьединяют</h5>
            <p>Посещайте конференции, лекции, ходите<br/>на выставки, занимайтесь саморазвитием<br/>и ищите единомышленников</p>
          </div>

          <div className={classes.IFV__information__description}>
            Познакомьтесь с новейшими<br/>технологиями проектирования<br/>и производства поближе
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;