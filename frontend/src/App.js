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
import MedicalPage from './pages/estimate/medical/MedicalPage'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/result' element={ <Result /> } />
        <Route path='' element={ <BackBarLayout to='/result' title='처음으로' /> } >
          <Route path='/survey' element={ <SurveyPage /> } />
        </Route>
        <Route path='/estimate/' element={ <BackBarLayout to='/estimate' title='초기 자금 견적 내기' /> } >
          <Route path='/estimate/medical' element={ <MedicalPage /> } />
        </Route>
        <Route path='/start' element={ <Start /> } />
        <Route path='/costs/:breed' element={ <Costs /> } />
      </Routes>
    </Router>
  );
}

export default App;
