import React, { useState } from 'react';
import './App.css';
import Pad from './Pad';
import './SwitchButton.css';


function App() {
  
  let [power, setPower] = useState(false);
  
  const handleOnClick = ()=>{
    setPower(!power);
  }

  const SwitchButton = ({id, onClick, receivedPower}) => {
    return(
        <div id={id} className={`switch ${receivedPower?'on':'off'}`} onClick={onClick} >
            <div className="switch-handle"></div>
        </div>
    )
  }


  return (
    <div id="drum-machine" className='container'>
      <div className='pad-bank'>
      <Pad id="Heater-1" label="Q" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' />
      <Pad id="Heater-2" label="W" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' />
      <Pad id="Heater-3" label="E" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' />
      <Pad id="Heater-4" label="A" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' />
      <Pad id="Heater-1" label="S" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' />
      <Pad id="Heater-1" label="D" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' />
      <Pad id="Heater-1" label="Z" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' />
      <Pad id="Heater-1" label="X" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' />
      <Pad id="Heater-1" label="C" power={power} audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' />  
      </div>
      <div className='controls-container'>
        <div className='control'>
          <p>Power</p>
          <SwitchButton id='Power' onClick={handleOnClick} receivedPower={power}/>
          <p id="display"></p>
        </div>
        <div className='volumn-slider'></div>
        <div className='control'></div>
      </div>
    </div>
  );


}

export default App;
