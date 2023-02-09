import React from 'react';
import classes from "./MyBotton.module.css";

const MyButton = ({children, link, ...props}) => {
  return (
    <button
      className={classes.myBtn}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        console.log(children)
      }
    }>
      {children}
    </button>
  );
};

export default MyButton;