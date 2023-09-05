import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CountryList from "./Component/CountryList";
import CountryDetail from "./Component/CountryDetail";

function App() {
  return (
    <div className="app">
      <h1 className="title">Countries</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<CountryList />} />
          <Route exact path="/country" element={<CountryList />} />
          <Route exact path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
