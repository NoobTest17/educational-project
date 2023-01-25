import React from 'react';
import classes from "./Registration.module.css";
import MyButton from "../UI/button/MyButton";
import FormRegistr from "./FormRegistr/FormRegistr";

const Registration = () => {
  return (
    <div className={classes.registr}>
      <div className={classes.title}>Регистрация участников<br/>(посетителей) фестиваля</div>
      <FormRegistr/>
      <div className={classes.btn}>
        <MyButton>Зарегестрироваться</MyButton>
      </div>
    </div>
  );
};

export default Registration;