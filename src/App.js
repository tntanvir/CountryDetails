// import logo from './logo.svg';
import './App.css';
import Country from './Component/Country';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CountryDetail from './Component/CountryDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Country />} />
          <Route exact path="/country" element={<Country />} />
          <Route exact path="/country/:CountryName" element={<CountryDetail />} />
          {/* <Route exact path="*" element={<Notfound />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
