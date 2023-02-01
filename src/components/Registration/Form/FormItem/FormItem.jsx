import React from 'react';
import classes from './FormItem.module.css';
import MyInput from "../../../UI/input/MyInput";

const FormItem = ({title}) => {
  return (
    <div className={classes.itemFrom}>
      <div className={classes.itemFrom__title}>{title}</div>
      <MyInput/>
    </div>
  );
};

export default FormItem;