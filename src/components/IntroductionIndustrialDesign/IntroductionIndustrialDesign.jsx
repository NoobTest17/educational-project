import React from 'react';
import IIDInfo from "./IIDInfo/IIDInfo";
import classes from './IntroductionIndustrialDesign.module.css';
import book from './../../accets/book.svg';
import MyButton from "../UI/button/MyButton";
import TopicsUnderConsideration from "./TopicsUnderConsideration/TopicsUnderConsideration";

const IntroductionIndustrialDesign = () => {
  return (
    <div>
      <IIDInfo/>
      <TopicsUnderConsideration/>
    </div>
  );
};

export default IntroductionIndustrialDesign;