import { 
  BrowserRouter as Router, 
  Routes,  
  Route
} from 'react-router-dom'

import BackBarLayout from './layouts/BackBarLayout';
import SurveyPage from "./pages/survey/SurveyPage";
import Result from './pages/result';
import Start from './pages/start'
import EstimateDetailPage from './pages/estimate/EstimateDetailPage';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/result' element={ <Result /> } />
        <Route path='' element={ <BackBarLayout to='/Result' title='처음으로' /> } >
          <Route path='/survey' element={ <SurveyPage /> } />
        </Route>
        <Route path='/estimate/detail' element={ <BackBarLayout to='/estimate' title='초기 자금 견적 내기' /> } >
          <Route path='/estimate/detail' element={ <EstimateDetailPage /> } />
        </Route>
        <Route path='/start' element={ <Start /> } />
      </Routes>
    </Router>
  );
}

export default App;
