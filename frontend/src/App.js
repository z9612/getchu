import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SurveyPage from "./components/SurveyPage";
import Result from "./pages/result";
import Choice from "./pages/Choice";

function App() {
  return (
    <div>
      {/* <SurveyPage /> */}
      <Router>
        <Routes>
          <Route path="/Result" element={<Result />} />
          <Route path="/Choice" element={<Choice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
