import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BackBarLayout from "./layouts/BackBarLayout";
import SurveyPage from "./pages/survey/SurveyPage";
import Result from "./pages/result";
import Start from "./pages/start";
import Choice from "./pages/choice";

import BreedingCosts from "./pages/breedingCosts";
import MedicalPage from "./pages/estimate/medical/MedicalPage";
import FoodPage from "./pages/estimate/food/FoodPage";
import GoodsPage from "./pages/estimate/goods/GoodsPage";
import "./index.css";
import Costs from "./pages/costs";
import BreedSelect from "./pages/breedSelect";
import EstimateDetailPage from "./pages/estimate/EstimateDetailPage";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route
          path=""
          element={<BackBarLayout to="/result" title="처음으로" />}
        >
          <Route path="/survey" element={<SurveyPage />} />
        </Route>
        <Route
          path="/estimate/"
          element={<BackBarLayout to="/estimate" title="초기 자금 견적 내기" />}
        >
          <Route path="/estimate/medical" element={<MedicalPage />} />
          <Route path="/estimate/food" element={<FoodPage />} />
          <Route path="/estimate/goods" element={<GoodsPage />} />
        </Route>
        <Route path="/start" element={<Start />} />
        <Route path="/costs/:breed" element={<BreedingCosts />} />
        <Route path="/start" element={<Start />} />
        <Route path="/result" element={<Result />} />
        <Route
          path=""
          element={<BackBarLayout to="/Result" title="처음으로" />}
        >
          <Route path="/survey" element={<SurveyPage />} />
        </Route>
        <Route
          path="/estimate/detail"
          element={<BackBarLayout to="/estimate" title="초기 자금 견적 내기" />}
        >
          <Route path="/estimate/detail" element={<EstimateDetailPage />} />
        </Route>
        <Route path="/start" element={<Start />} />
        <Route path="/breedselect" element={<BreedSelect />} />
        <Route path="/costs/:breed" element={<Costs />} />
      </Routes>
      <Routes>
        <Route path="/choice" element={<Choice />} />
      </Routes>
    </Router>
  );
}

export default App;
