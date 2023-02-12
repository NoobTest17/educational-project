import React from 'react';
import s from './banner_info.module.css';
import img from "../../../accets/Lampa_yellow.png";
import MyButton from "../../UI/button/MyButton";


const Img_lampa = () => {
  return (<div className={s.img}>
    <img src={img} alt=""/>
  </div>);
};

const Info_festival = () => {
  return (<div className={s.info}>
    <div className={s.nazvanie}>
      <h1 className={s.zagolovok}>Фестиваль<br/>промышленного дизайна</h1>
      <p className={s.place}>состоится осенью в Нижнем Новгороде</p>
    </div>
    <div className={s.banner_info_buttons}>
      <MyButton link="Registration">Посетить</MyButton>
    </div>

    <div className={s.main_idea}>
      <h2 className={s.zag}>Главные идеи фестиваля:</h2>
      <p className={s.text_banner}> Интеграция дизайна в повседневную жизнь<br/>
        людей. Формирование у человека желание и <br/>
        потребность в дизайнерских решениях.<br/>
        Проникновение дизайна в сферу личных <br/> интересов (мебель, интерьер, вещи), <br/> окружающего
        пространства
        вне
        дома <br/> (общественные пространства, здания, <br/> транспорт
        и
        технологии(позволяют
        задуматься <br/> о том что хочет в будущем). </p>
    </div>
  </div>)
}

const Banner_info = () => {
  return (<div className={s.banner_info}>
    <Img_lampa/>
    <Info_festival/>
  </div>);
}

export default Banner_info;