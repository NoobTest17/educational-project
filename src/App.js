import './App.css'
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import InformationForVisitors from "./components/InformationForVisitors/InformationForVisitors";
import IntroductionIndustrialDesign from "./components/IntroductionIndustrialDesign/IntroductionIndustrialDesign";
import InformationForFestivalParticipants from "./components/InformationForFestivalParticipants/InformationForFestivalParticipants";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/'  element={<Main/>}/>
          <Route path={'/InformationForFestivalParticipants'} element={<InformationForFestivalParticipants/>}/>
          <Route path={'/IntroductionIndustrialDesign'} element={<IntroductionIndustrialDesign/>}/>
          <Route path={'/InformationForFestivalParticipants'} element={<InformationForFestivalParticipants/>}/>
          <Route path={'/InformationForFestivalParticipants'} element={<InformationForVisitors/>}/>
          <Route path={'/Registration'} element={<Registration/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
