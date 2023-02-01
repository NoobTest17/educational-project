import './App.css'
import Header from "./components/Header/Header";
import Registration from "./components/Registration/Registration";
import InformationForVisitors from "./components/InformationForVisitors/InformationForVisitors";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Registration/>*/}
      <InformationForVisitors/>
    </div>
  );
}

export default App;
