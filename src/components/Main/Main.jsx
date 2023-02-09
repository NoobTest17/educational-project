import React from 'react';
import Banner_info from "./Banner_info/banner_info";
import InfoForPeople from "./InfoForPeople/InfoForPeople";
import Nominazi from "./Nominazi/nominazi";
import DopInfo from "./DopInfo/dopInfo";
import Place from "./Place/Place";

const Main = () => {
  return (
    <div>
      <Banner_info/>
      <InfoForPeople />
      <Nominazi />
      <DopInfo />
      <Place />
    </div>
  );
};

export default Main;