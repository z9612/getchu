import { 
  BrowserRouter as Router, 
  Routes,  
  Route
} from 'react-router-dom'

import BackBarLayout from './layouts/BackBarLayout';
import SurveyPage from "./pages/survey/SurveyPage";
import Result from './pages/result';
import Start from './pages/start'
import Costs from './pages/costs';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/result' element={ <Result /> } />
        <Route path='' element={ <BackBarLayout to='/result' /> } >
          <Route path='/survey' element={ <SurveyPage /> } />
        </Route>
        <Route path='/start' element={ <Start /> } />
        <Route path='/costs/:breed' element={ <Costs /> } />
      </Routes>
    </Router>
  );
}

export default App;
