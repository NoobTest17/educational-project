import React from 'react';

import s from './InfoForPeople.module.css';

import Bk from "../../../accets/book.png";

import fon from "../../../accets/Info.png";

import fon_E from "../../../accets/LongEducation.png";

const ButtonPosetit = () => {
  return (
    <div className={s.banner_info_buttons}>
      <a href="my-app/src/components/InfoForPeople" className={s.btn_primary}> Подробнее </a>
    </div>
  );
}

const InfoForPosetitel = () => {
  return (
    <div className={s.info_po}>
      <div className={s.text_box}>
        <h1>Информация для<br/> посетителей<br/> фестиваля</h1>
        <p>Откройте для себя новейшие<br/> продукты, технологии и<br/> решения</p>
      </div>
      <ButtonPosetit/>
      <img className={s.img_responsive} src={fon}/>
    </div>
  );
}

const InfoForPartipiant = () => {
  return (
    <div className={s.info_pa}>
      <div className={s.text_box}>
        <h1>Информация для<br/> участников<br/> фестиваля</h1>
        <p>Общайтесь с инженерами,<br/> дизайнерами и другими людьми</p>
      </div>
      <ButtonPosetit/>
      <img className={s.img_responsive} src={fon}/>
    </div>
  );
}

const Воок = () => {
  return (
    <div className={s.Bооk}>
      <img src={Bk} alt=""/>
    </div>
  );
};


const Education = () => {
  return (
    <div className={s.info_E}>
      <div className={s.text_box}>
        <h1>Ознакомление с промышленным дизайном<br/> (образовательная программа)</h1>
        <p>Будьте в курсе событий и расширяйте свои знания<br/> на занятиях под руководством экспертов,<br/> проводимых
          в специализированных <br/>образовательных центрах </p>
      </div>
      <ButtonPosetit/>
      <img className={s.img_responsive} src={fon_E}/>
    </div>
  );
}

const InfoForPeople = () => {
  return (
    <div className={s.info}>
      <InfoForPosetitel/>
      <InfoForPartipiant/>
      <Воок/>
      <Education/>


    </div>
  );
}

export default InfoForPeople;