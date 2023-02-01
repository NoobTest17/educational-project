import React from 'react';
import classes from './InformationForVisitors.module.css';
import SectionInfo from "./SectionInfo/SectionInfo";
import pencilLamp from '../../img/pencilLamp.svg';
import MyButton from "../UI/button/MyButton";

const InformationForVisitors = () => {
  return (
    <div>
      <SectionInfo/>
      <div>
        <div>
          <p>
            Посмотрите на новые передовые<br/>
            производственные технологии в действии и<br/>
            поучитесь у опытных экспертов на этой выставке.<br/>
            Присоединяйтесь к сообществу новаторов,<br/>
            продвигающих дизайн, инжиниринг и<br/>
            производство вперед.
          </p>
          <div>
            <MyButton>Посетить</MyButton>
          </div>
        </div>
        <img src={pencilLamp} alt=""/>
      </div>
    </div>
  );
};

export default InformationForVisitors;