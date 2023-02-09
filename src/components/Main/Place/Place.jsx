import React from 'react';

import s from './Place.module.css';

import img from "../../../accets/GerbNN.png";


const Place = () => {
  return (
    <div className={s.place}>
      <div className={s.img}>
        <img className={s.img1} src={img} alt=""/>
      </div>
      <div className={s.info}>
        <h1 className={s.h1}>МЕСТО</h1>
        <p className={s.p1}>Нижний Новгород<br/></p>
        <p className={s.p1}></p>
        <p className={s.p2}>Столица Поволжья и пятый по численности <br/> мегаполис России, ведущий свою историю с
          XIII <br/> века. Великолепный старорусский город <br/> расположен на месте встречи рек Оки и Волги
        </p>
      </div>
    </div>
  );
}

export default Place;