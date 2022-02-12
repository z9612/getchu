import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SurveyPage from "./components/SurveyPage";
import Result from "./pages/result";
import Choice from "./pages/choice";

function App() {
  return (
    <div>
      {/* <SurveyPage /> */}
      <Router>
        <Routes>
          <Route path="/result" element={<Result />} />
          <Route path="/choice" element={<Choice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
