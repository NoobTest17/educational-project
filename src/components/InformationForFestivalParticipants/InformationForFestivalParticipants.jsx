import React from 'react';
import IFFPInfo from "./IFFPInfo/IFFPInfo";
import IFFPCompetition from "./IFFPCompetition/IFFPCompetition";
import IFFPRulesOfParticipation from "./IFFPRulesOfParticipation/IFFPRulesOfParticipation";

const InformationForFestivalParticipants = () => {
  return (
    <div>
      <IFFPInfo/>
      <IFFPCompetition/>
      <IFFPRulesOfParticipation/>
    </div>
  );
};

export default InformationForFestivalParticipants;