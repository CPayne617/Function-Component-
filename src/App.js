import React from 'react';
import FloorPlan from './components/FloorPlan';
import Kitchen from './components/Kitchen';
import LivingRoom from './components/LivingRoom';
import Bedroom from './components/Bedroom';
import Bath from './components/Bath';
import Oven from './components/Oven';
import Stove from './components/Sink';

import './App.css';

const App = () => {
  const plans = {
    bedroom1: "bedroom1",
    kitchen: "kitchen",
    oven: "oven",
    sink: "sink",
    bath: "bath",
    bedroom2: "bedroom2",
    bedroom3: "bedroom3"
}

  return(
    <div><FloorPlan plans =  {plans} /></div>
  )
}

export default App;