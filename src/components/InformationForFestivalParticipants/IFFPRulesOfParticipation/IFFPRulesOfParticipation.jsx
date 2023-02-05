import React from 'react';
import classes from './IFFPRulesOfParticipation.module.css';
import bookPancel from '../../../accets/bookPancel.svg'
import IFFPROPItems from "./IFFPROPItems/IFFPROPItems";

const IffpRulesOfParticipation = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.IFFPROP}>
        <div className={classes.IFFPROP__title}>
          <p>Правила участия</p>
        </div>
        <div className={classes.IFFPROP__content}>
          <img src={bookPancel} alt=""/>
          <div className={classes.IFFPROP__content__list}>
            <IFFPROPItems text={'В конкурсе могут принять участие совершеннолетние граждане Российской Федерации и стран СНГ.'}/>
            <IFFPROPItems text={'Ключевой критерий при отборе работ — оригинальность и реалистичность воплощения идеи.'}/>
            <IFFPROPItems text={'Каждый участник может подать не более 3-х работ в любых номинациях'}/>
            <IFFPROPItems text={'Конкурсная работа должна содержать описание и визуализацию проекта в виде эскизов, чертежей, 3D–макетов или изображений (не менее 3-х и не более 10), в формате PNG, JPG с разрешением не менее 250 ppi, цветовая схема RGB, размер — строго 1920 x 1080. Также заявка может сопровождаться видеоматериалами в виде ссылок на сервисах: YouTube, Vimeo или RuTube.'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IffpRulesOfParticipation;