import React, { useState } from 'react';
import './App.css';
import Pad from './Pad';
import SwitchButton from './SwitchButton';


function App() {
  const [power, setPower] = useState(false);
  
  const handlePowerToggle = (isOn)=>{
    setPower(isOn);
  }
  
  return (
    <div id="drum-machine" className='container'>
      <div className='pad-bank'>
        <Pad id="Heater-1" label="Q" audioSrc='/audio/Heater-1.mp3' power={power} />
        <Pad id="Heater-2" label="W" audioSrc='/audio/Heater-2.mp3' power={power} />
        <Pad id="Heater-3" label="E" audioSrc='/audio/Heater-3.mp3' power={power} />
        <Pad id="Heater-4" label="A" audioSrc='/audio/Heater-4.mp3' power={power} />
        <Pad id="Clap" label="S" audioSrc='/audio/Clap.mp3' power={power} />
        <Pad id="Open_HH" label="D" audioSrc='/audio/Open_HH.mp3' power={power} />
        <Pad id="Kick_n_Hat" label="Z" audioSrc='/audio/Kick_n_Hat.mp3' power={power} />
        <Pad id="Kick" label="X" audioSrc='/audio/Kick.mp3' power={power} />
        <Pad id="Closed_HH" label="C" audioSrc='/audio/Closed_HH.mp3' power={power} />
      </div>
      <div className='controls-container'>
        <div className='control'>
          <p>Power</p>
          <SwitchButton id='power' onToggle={handlePowerToggle}/>
          <p id="display"></p>
        </div>
        <div className='volumn-slider'></div>
        <div className='control'></div>
      </div>
    </div>
  );
}

export default App;
