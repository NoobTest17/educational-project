import React from 'react';
import classes from "./Registration.module.css";
import Form from "./FormRegistr/Form";

const Registration = () => {
  return (
    <div className={classes.registration}>
      <div className={classes.title}>Регистрация участников<br/>(посетителей) фестиваля</div>
      <Form/>
    </div>
  );
};

export default Registration;