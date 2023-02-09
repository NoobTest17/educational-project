import React from 'react';

import s from './nominazi.module.css';

import Cit from "../../../accets/City.png";

import Tr from "../../../accets/Transport.png";

import M from "../../../accets/Monitor.png";


const Nominazi = () => {
  return (
    <div className={s.nominazi}>
      <h1 className={s.h1}>Номинации</h1>
      <div className={s.transport}>
        <img className={s.img} src={Tr}/>
        <p className={s.p1}>«Дизайн транспортных средств»</p>
      </div>
      <div className={s.it}>
        <img className={s.img1} src={M}/>
        <p className={s.p1}>«Территория IT технологий»</p>
      </div>
      <div className={s.city}>
        <img className={s.img2} src={Cit}/>
        <p className={s.p1}>«Город будущего»</p>
      </div>
    </div>
  );
}


export default Nominazi;