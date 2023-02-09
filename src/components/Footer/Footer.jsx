import React from 'react';

import s from './Footer.module.css';

import VK from "./../../accets/vk.png";

import Lg from "./../../accets/Logo.png";

import Yt from "./../../accets/YuTube.png";

import Tg from "./../../accets/Telegram.png";

import F from "./../../accets/Footer.png";

const Footer = () => {
  return (
    <div className={s.footer}>
      <img className={s.fon} src={F}/>
      <div className={s.logo}>

        <img className={s.img0} src={Lg} alt=""/>
        <p className={s.p3}>Промышленный<br/>дизайн</p>
      </div>
      <div className={s.info}>
        <div>
          <p>Контакты<br/><br/>О фестивале</p>
          <br/>
          <p> Авторское право © 2022. Все права защищены</p>
        </div>
        <div className={s.ceti}>
          <p>Мы в соц. сетях</p>
          <img className={s.img1} src={Yt} alt=""/>
          <img className={s.img2} src={VK} alt=""/>
          <img className={s.img3} src={Tg} alt=""/>
        </div>
      </div>
    </div>
  );
}
export default Footer;