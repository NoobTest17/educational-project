import React from 'react';
import classes from "./MyBotton.module.css";
import {Link} from 'react-router-dom';

const MyButton = ({children, link, ...props}) => {
  return (
    <Link to={link || ''}>
      <button className={classes.myBtn } {...props}>
        {children}
      </button>
    </Link>
  );
};

export default MyButton;