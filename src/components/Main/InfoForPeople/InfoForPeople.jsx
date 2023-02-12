import React from 'react';
import s from './InfoForPeople.module.css';
import Bk from "../../../accets/book.png";
import PolInfo from "./PolInfo/PolInfo";
import Education from "./Education/Education";

const InfoForPeople = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.info__top}>
          <div className={s.info__top__content}>
            <PolInfo
              title={<span>Информация для<br/> посетителей<br/> фестиваля</span>}
              description={<span>Откройте для себя новейшие<br/> продукты, технологии и<br/> решения</span>}
              link="InformationForVisitors"
            />
            <PolInfo
              title={<span>Информация для<br/> участников<br/> фестиваля</span>}
              description={<span>Общайтесь с инженерами,<br/> дизайнерами и другими людьми</span>}
              link="InformationForFestivalParticipants"
            />
          </div>
          <img src={Bk} alt=""/>
        </div>

        <div className={s.info__down}>
          <Education link="/IntroductionIndustrialDesign"/>
        </div>
      </div>
    </div>
  );
}

export default InfoForPeople;