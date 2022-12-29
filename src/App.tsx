import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"
import './App.css';
import { FirstMap } from './components/FirstMap';
import { GFMap } from './components/GFMap';
import { SFMap } from './components/SFMap';
import { Box } from '@mui/system';

// import { GroundMap } from './components/GroundMap';
// import { GroundMapp } from './components/GroundMapp';
// import { TestGround } from './components/TestGround'

function App() {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
      <div className="App">
        <Box className='w-[1100px] mx-auto'>
          <Accordion expanded={ expanded === 'ground'} onChange={(event, isExpanded) => handleChange(isExpanded, 'ground') }>
              <AccordionSummary id="ground-header" aria-controls="ground-content" expandIcon={<ExpandMoreIcon />}>
                  <Typography>Ground Floor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <GFMap></GFMap>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={ expanded === 'first'} onChange={(event, isExpanded) => handleChange(isExpanded, 'first') }>
              <AccordionSummary id="first-header" aria-controls="first-content" expandIcon={<ExpandMoreIcon />}>
                  <Typography>First Floor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FirstMap></FirstMap>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={ expanded === 'second'} onChange={(event, isExpanded) => handleChange(isExpanded, 'second') }>
              <AccordionSummary id="second-header" aria-controls="second-content" expandIcon={<ExpandMoreIcon />}>
                  <Typography>Second Floor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <SFMap></SFMap>
              </AccordionDetails>
          </Accordion>
        </Box>

        {/* <FirstMap></FirstMap> */}
        {/* <SFMap></SFMap> */}
        {/* <GroundMap></GroundMap> */}
        {/* <GroundMapp></GroundMapp> */}
        {/* <TestGround></TestGround> */}
      </div>
  )
}

export default App;
