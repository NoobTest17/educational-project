import React from 'react';

import s from './DopInfo.module.css';

import Z from "../../../accets/Zadanie.png";

import P from "../../../accets/Podarok.png";

const DopInfo = () => {
  return (
    <div className={s.dopInfo}>
      <div className={s.Za}>
        <img className={s.img1} src={Z}/>
        <div className={s.p}><p>Задания от ведущих <br/> российких компаний</p>
        </div>
      </div>
      <div className={s.Po}>
        <img className={s.img2} src={P}/>
        <div className={s.p}><p>Победителей конкурса<br/> ждут уникальные призы</p>
        </div>
      </div>
    </div>
  );
}

export default DopInfo;