import './App.css';
import Registration from "./components/Registration/Registration";
import InformationForVisitors from "./components/InformationForVisitors/InformationForVisitors";
import IntroductionIndustrialDesign from "./components/IntroductionIndustrialDesign/IntroductionIndustrialDesign";
import InformationForFestivalParticipants from "./components/InformationForFestivalParticipants/InformationForFestivalParticipants";
import Main from "./components/Main/Main";
import Layout from "./components/Layout";
import Error from "./components/Error/Error";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path={'InformationForFestivalParticipants'} element={<InformationForFestivalParticipants/>}/>
            <Route path={'IntroductionIndustrialDesign'} element={<IntroductionIndustrialDesign/>}/>
            <Route path={'InformationForVisitors'} element={<InformationForVisitors/>}/>
            <Route path={'Registration'} element={<Registration/>}/>
            <Route path={'*'} element={<Error/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
