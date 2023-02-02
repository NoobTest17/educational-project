import React from 'react';
import IIDInfo from "./IIDInfo/IIDInfo";
import classes from './IntroductionIndustrialDesign.module.css';
import book from './../../accets/book.svg';
import MyButton from "../UI/button/MyButton";

const IntroductionIndustrialDesign = () => {
  return (
    <div>
      <IIDInfo/>
      <div className={classes.wrapper}>
        <div className={classes.TUC}>
          <div className={classes.TUC__content}>
            <h5>Рассматриваемые темы</h5>
            <p>«Дизайн как мировоззрение: реальность, вызовы, прогнозы»</p>
            <p>«Потребность современной промышленности в дизайне»</p>
            <p>«Роль дизайна в формировании городской среды»</p>
            <p>«Дизайн - как образ жизни»</p>
            <div className={classes.TUC__content__btn}>
              <MyButton style={{
                fontSize: '32px',
                fontFamily: 'Inter',
                fontWeight: '700'
              }}>Посетить</MyButton>
            </div>
          </div>
          <img src={book} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default IntroductionIndustrialDesign;