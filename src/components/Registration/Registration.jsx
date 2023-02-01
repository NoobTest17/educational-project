import React from 'react';
import classes from './Registration.module.css';
import Form from "./Form/Form";

const Registration = () => {
  return (
    <div className={classes.registration}>
      <div className={classes.registration__title}>Регистрация участников<br/>(посетителей) фестиваля</div>
      <Form/>
    </div>
  );
};

export default Registration;