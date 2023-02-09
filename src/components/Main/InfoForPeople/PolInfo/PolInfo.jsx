import React from 'react';
import classes from './PolInfo.module.css';
import MyButton from "../../../UI/button/MyButton";
import background from "../../../../accets/Info.png";

const PolInfo = ({title, description}) => {
  return (
    <div style={{backgroundImage: `url("${background}")`}} className={classes.wrapper}>
      <div className={classes.title}>
        <p>{title}</p>
      </div>
      <div className={classes.description}>
        <p>{description}</p>
      </div>
      <div className={classes.btn}>
        <MyButton style={{fontSize: '28px', color: "black", padding: '13px 10%'}}>Подробнее</MyButton>
      </div>
    </div>
  );
};

export default PolInfo;