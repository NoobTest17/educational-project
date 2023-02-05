import React from 'react';
import classes from "./IFFPInfo.module.css";
import lampWithGear from "../../../accets/lampWithGear.svg";

const IffpInfo = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.IFFP}>
        <div>
          <div className={classes.IFFP__content__top}>
            <div className={classes.IFFP__content__top__text}>
              <p>Информация для<br/>участников фестиваля</p>
              <h5>
                Проведите          <br/>
                эффективно время с <br/>
                высококачественными<br/>
                лидерами           <br/>
              </h5>
            </div>
            <img src={lampWithGear} alt=""/>
          </div>
        </div>
        <div className={classes.IFFP__content__down}>
          <p>
            Каждый год покупатели, руководители и лица, принимающие     <br/>
            решения, посещают крупнейшее событие в области дизайна и    <br/>
            производства. И они не просто хотят наладить связи — они    <br/>
            работают с целью поиска новейших технологий в области       <br/>
            медицины, упаковки, дизайна продукции, автоматизации,       <br/>
            пластмасс и качества. Будьте там, чтобы встретиться с ними.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IffpInfo;