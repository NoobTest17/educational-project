import React from 'react';
import classes from './PointFormRegistr.module.css';
import MyInput from "../../../UI/input/MyInput";

const PointFormRegistr = ({title}) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.Input}>
        <MyInput type="text"/>
      </div>
    </div>
  );
};

export default PointFormRegistr;