import { 
  BrowserRouter as Router, 
  Routes,  
  Route
} from 'react-router-dom'

import BackBarLayout from './layouts/BackBarLayout';
import SurveyPage from "./pages/survey/SurveyPage";
import Result from './pages/result';
import Start from './pages/start'
import BreedingCosts from './pages/breedingCosts';
import MedicalPage from './pages/estimate/medical/MedicalPage'
import FoodPage from './pages/estimate/food/FoodPage'
import GoodsPage from './pages/estimate/goods/GoodsPage';
import MedicalPage from './pages/estimate/medical/MedicalPage'
import FoodPage from './pages/estimate/food/FoodPage'
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
          <Route path='/estimate/food' element={ <FoodPage /> } />
          <Route path='/estimate/goods' element={ <GoodsPage /> } />
        </Route>
        <Route path='/start' element={ <Start /> } />
        <Route path='/costs/:breed' element={ <BreedingCosts /> } />
        <Route path='/start' element={ <Start /> } />
      </Routes>
    </Router>
  );
}

export default App;
