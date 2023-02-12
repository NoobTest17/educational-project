import React from 'react';
import classes from './IIDInfo.module.css';
import lampWithGear from "../../../accets/lampWithGear.svg";
import MyButton from "../../UI/button/MyButton";

const IidInfo = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.IID}>
        <img src={lampWithGear} alt=""/>
        <div className={classes.IID__content}>
          <h1>Ознакомление с<br/>
            промышленным дизайном<br/>
            (образовательная программа)
          </h1>
          <p>
            Грандиозная образовательная программа на<br/>
            самые актуальные темы, посвященные миру<br/>
            дизайна, с участием известных российских и<br/>
            международных дизайнеров, экспертов и<br/>
            производителей
          </p>
          <div className={classes.IID__content__btn}>
            <MyButton
              style={{
                fontSize: '32px',
                fontFamily: 'Inter',
                fontWeight: '700'
              }}
              link="/Registration"
            >Посетить</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IidInfo;