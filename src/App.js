import logo from "./logo.svg";
import "./App.css";
import Tab from "./Container/Tab/Tab";
import GlobalStyles from "./Global.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Tab />}></Route>
          <Route path="/tab" element={<Tab />} />
          <Route exact path="/tab/:id" element={<Tab />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
