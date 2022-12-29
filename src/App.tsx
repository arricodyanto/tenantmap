import './App.css';
import { GFMap } from './components/GFMap';
import { SFMap } from './components/SFMap';
// import { GroundMap } from './components/GroundMap';
// import { GroundMapp } from './components/GroundMapp';
// import { TestGround } from './components/TestGround'

function App() {
  return (
      <div className="App">
        <GFMap></GFMap>
        <SFMap></SFMap>
        {/* <GroundMap></GroundMap> */}
        {/* <GroundMapp></GroundMapp> */}
        {/* <TestGround></TestGround> */}
      </div>
  )
}

export default App;
