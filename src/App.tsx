import './App.css';
import { FirstMap } from './components/FirstMap';
import { GFMap } from './components/GFMap';
import { SFMap } from './components/SFMap';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

// import { GroundMap } from './components/GroundMap';
// import { GroundMapp } from './components/GroundMapp';
// import { TestGround } from './components/TestGround'

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<GFMap></GFMap>} />
            <Route path='/first' element={<FirstMap></FirstMap>} />
            <Route path='/second' element={<SFMap></SFMap>} />
          </Routes>
        </Router>
        {/* <FirstMap></FirstMap> */}
        {/* <SFMap></SFMap> */}
        {/* <GroundMap></GroundMap> */}
        {/* <GroundMapp></GroundMapp> */}
        {/* <TestGround></TestGround> */}
      </div>
  )
}

export default App;
