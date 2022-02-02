import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import LoginContainer from "./LoginContainer";
import Backbutton from "./Backbutton";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" caseSensitive={false} element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/back" caseSensitive={false} element={<Backbutton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
