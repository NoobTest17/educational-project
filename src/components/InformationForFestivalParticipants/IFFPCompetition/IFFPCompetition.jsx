import React from 'react';
import MyButton from "../../UI/button/MyButton";
import classes from './IFFPCompetition.module.css';
import people from '../../../accets/people.svg';
import IFFPCItem from "./IFFPCItem/IFFPCItem";

const IffpCompetition = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.IFFPC}>
        <div className={classes.IFFPC__title}>
          <p>Порядок участия в конкурсе</p>
        </div>

        <div className={classes.IFFPC__content}>
          <div className={classes.IFFPC__content__left}>
            <img src={people} alt=""/>
            <div className={classes.IFFPC__content__left__btn}>
              <MyButton>Регистрация</MyButton>
            </div>
          </div>
          <div>
            <div className={classes.IFFPC__content__list}>
              <IFFPCItem text="Зарегестрируйтесь на сайте"/>
              <IFFPCItem text="Подайте заявку"/>
              <IFFPCItem text="Выберите номинацию и кейс задание."/>
              <IFFPCItem text="Разработайте идею и отправьте ее на конкурс"/>
              <IFFPCItem text="Ждите результатов"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IffpCompetition;