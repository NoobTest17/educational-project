import React from 'react';
import classes from "../../IFFPCompetition/IFFPCItem/IFFPCItem.module.css";
import star from "../../../../accets/star.svg";

const IffpropItems = ({text}) => {
  return (
    <div className={classes.item}>
      <img src={star} alt=""/>
      <p>{text}</p>
    </div>
  );
};

export default IffpropItems;