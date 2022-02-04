import { 
  BrowserRouter as Router, 
  Routes,  
  Route
} from 'react-router-dom'

import SurveyPage from "./pages/survey/SurveyPage";
import Result from './pages/result'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Result' element={ <Result /> } />
        <Route path='/survey' element={ <SurveyPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
