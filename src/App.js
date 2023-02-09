import './App.css'
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import InformationForVisitors from "./components/InformationForVisitors/InformationForVisitors";
import IntroductionIndustrialDesign from "./components/IntroductionIndustrialDesign/IntroductionIndustrialDesign";
import InformationForFestivalParticipants from "./components/InformationForFestivalParticipants/InformationForFestivalParticipants";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Registration/>*/}
      {/*<InformationForVisitors/>*/}
      {/*<IntroductionIndustrialDesign/>*/}
      {/*<InformationForFestivalParticipants/>*/}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
