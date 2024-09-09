import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Generation from './components/Generation';
import MainMap from './components/MainMap';
import Transmission from './components/Transmission';
import TempMap from './components/TempMap';
import Headquartes from './components/Headquartes';
import Distribution from './components/Distribution';
import DistributionBack from './components/DistributionBack';
import GenerationBack from './components/GenerationBack';
import EnergyServicesBack from './components/EnergyServicesBack';
import EnergyServices from './components/EnergyServices';
import TransmissionBack from './components/TransmissionBack';
import TempMapBack from './components/TempMapBack';
import BackSide from './components/BackSide';
import HeadquartesBack from './components/HeadquartesBack';
import WaterSolutionsBack from './components/WaterSolutionsBack';
import WaterSolutions from './components/WaterSolutions';
import TheArenaBack from './components/TheArenaBack';
import TheArena from './components/TheArena'
import YouthHubBack from './components/YouthHubBack';
import YouthHub from './components/YouthHub'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<MainMap />} />
          <Route exact path='/back' element={<BackSide />} />
          <Route exact path='/generation' element={<Generation />} />
          <Route exact path='/generationback' element={<GenerationBack />} />
          <Route exact path='/transmission' element={<Transmission />} />
          <Route exact path='/transmissionback'element={<TransmissionBack />}/>
          <Route exact path='/temp-map' element={<TempMap />} />
          <Route exact path='/temp-map-back' element={<TempMapBack />} />
          <Route exact path='/hq' element={<Headquartes />} />
          <Route exact path='/hqback' element={<HeadquartesBack />} />
          <Route exact path='distribution' element={<Distribution />} />
          <Route exact path='distributionback' element={<DistributionBack />} />
          <Route exact path='energy-services' element={<EnergyServices />} />
          <Route exact path='energy-services-back' element={<EnergyServicesBack />} />
          <Route exact path='water-solutions-back' element={<WaterSolutionsBack />} />
          <Route exact path='water-solutions' element={<WaterSolutions />} />
          <Route exact path='the-arena-back' element={<TheArenaBack />} />
          <Route exact path='the-arena' element={<TheArena />} />
          <Route exact path='youth-hub' element={<YouthHub />} />
          <Route exact path='yout-hub-back' element={<YouthHubBack />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
