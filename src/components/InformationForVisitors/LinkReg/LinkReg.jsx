import React from 'react';
import classes from './LinkReg.module.css';
import MyButton from "../../UI/button/MyButton";
import pencilLamp from "../../../accets/pencilLamp.svg";

const LinkReg = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.linkReg}>
        <div className={classes.linkReg__content}>
          <p>
            Посмотрите на новые передовые<br/>
            производственные технологии в действии и<br/>
            поучитесь у опытных экспертов на этой выставке.<br/>
            Присоединяйтесь к сообществу новаторов,<br/>
            продвигающих дизайн, инжиниринг и<br/>
            производство вперед.
          </p>
          <div className={classes.linkReg__content__btn}>
            <MyButton style={{
              fontSize: '32px',
              fontFamily: 'Inter',
              fontWeight: '700'
            }}>Посетить</MyButton>
          </div>
        </div>
        <img src={pencilLamp} alt=""/>
      </div>
    </div>
  );
};

export default LinkReg;