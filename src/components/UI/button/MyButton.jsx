import React from 'react';
import classes from "./MyBotton.module.css";
import { useNavigate } from 'react-router-dom';

const MyButton = ({children, link, ...props}) => {
  const pushUrl = () => {


  }

  return (
    <button
      className={classes.myBtn}
      {...props}
      onClick={(e) => {
        e.preventDefault();
      }
    }>
      {children}
    </button>
  );
};

export default MyButton;