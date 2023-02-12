import React from 'react';
import classes from "./Education.module.css";
import fon_E from "../../../../accets/LongEducation.png";
import MyButton from "../../../UI/button/MyButton";
import background from "../../../../accets/bigFon.png";

const Education = ({link}) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.wrapperMain}
        style={{backgroundImage: `url("${background}")`}}
      >
        <div className={classes.title}>
          <p>Ознакомление с промышленным дизайном<br/> (образовательная программа)</p>
        </div>
        <div className={classes.content}>
          <div className={classes.content__main}>
            <p>Будьте в курсе событий и расширяйте свои знания<br/> на занятиях под руководством
              экспертов,<br/> проводимых
              в специализированных <br/>образовательных центрах </p>
          </div>
          <div className={classes.content__btn}>
            <MyButton
              style={{fontSize: '28px', color: "black", padding: '13px 10%'}}
              link={link}
            >Подробнее</MyButton>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Education;