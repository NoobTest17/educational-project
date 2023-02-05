import './App.css'
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import InformationForVisitors from "./components/InformationForVisitors/InformationForVisitors";
import IntroductionIndustrialDesign from "./components/IntroductionIndustrialDesign/IntroductionIndustrialDesign";
import InformationForFestivalParticipants
  from "./components/InformationForFestivalParticipants/InformationForFestivalParticipants";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Registration/>*/}
      {/*<InformationForVisitors/>*/}
      {/*<IntroductionIndustrialDesign/>*/}
      <InformationForFestivalParticipants/>
    </div>
  );
}

export default App;
