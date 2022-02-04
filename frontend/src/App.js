import { Route, Routes } from 'react-router-dom'

import SurveyPage from "./components/SurveyPage";
import Result from './pages/result'

function App() {
  return (
    <div>
      <SurveyPage />
      <Routes>
        <Route path='/Result' element={ <Result /> } />
      </Routes>
    </div>
  );
}

export default App;
