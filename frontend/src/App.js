import { 
  BrowserRouter as Router, 
  Routes,  
  Route
} from 'react-router-dom'

import BackBarLayout from './layouts/BackBarLayout';
import SurveyPage from "./pages/survey/SurveyPage";
import Result from './pages/result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Result' element={ <Result /> } />
        <Route path='/survey' element={ <SurveyPage /> } />
        <Route path='' element={ <BackBarLayout /> }>
          <Route path='/survey2' element={ <SurveyPage /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
