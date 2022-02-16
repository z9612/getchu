import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BackBarLayout from "./layouts/BackBarLayout";
import Start from "./pages/start";
import SurveyPage from "./pages/survey/SurveyPage";
import Result from "./pages/result";
import Choice from "./pages/choice";
import BreedingCosts from "./pages/breedingCosts";
import BreedSelect from "./pages/breedSelect";
import Mbti from "./pages/mbti";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 견종 추천 */}
        <Route path="/start" element={<Start />} />
        <Route
          path="/recommend"
          element={<BackBarLayout to="/start" title="처음으로" />}
        >
          <Route path="/recommend" element={<Choice />} />
          <Route path="/recommend/lifeStyle" element={<SurveyPage />} />
          <Route path="/recommend/mbti" element={<Mbti />} />
          <Route path="/recommend/dogTrait" element={<SurveyPage />} />
        </Route>
        <Route
          path="/result"
          element={<BackBarLayout to="/start" title="처음으로" />}
        >
          <Route path="/result" element={<Result />} />
        </Route>

        {/* 초기 견적 */}
        <Route
          path="/cost/"
          element={<BackBarLayout to="/start" title="처음으로" />}
        >
          <Route path="/cost/breedSelect" element={<BreedSelect />} />
          <Route path="/cost/:breed" element={<BreedingCosts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
