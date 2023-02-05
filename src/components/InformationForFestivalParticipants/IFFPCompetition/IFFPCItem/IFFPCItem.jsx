import React from 'react';
import star from '../../../../accets/star.svg';
import classes from './IFFPCItem.module.css';

const IffpcItem = ({text}) => {
  return (
    <div className={classes.item}>
      <img src={star} alt=""/>
      <p>{text}</p>
    </div>
  );
};

export default IffpcItem;