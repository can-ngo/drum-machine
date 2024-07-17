import React, { useState } from 'react';
import './App.css';
import Pad from './Pad';
import './SwitchButton.css';
import './VolumeSlider.css';
import PropTypes from 'prop-types';

const bankOne = [{
    "label": "Q",
    "soundname": "Heater-1",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    "label": "W",
    "soundname": "Heater-2",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    "label": "E",
    "soundname": "Heater-3",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    "label": "A",
    "soundname": "Heater-4",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    "label": "S",
    "soundname": "Clap",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    "label": "D",
    "soundname": "Open-HH",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    "label": "Z",
    "soundname": "Kick-n-Hat",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    "label": "X",
    "soundname": "Kick",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    "label": "C",
    "soundname": "Closed-HH",
    "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

function App() {
  
  let [power, setPower] = useState(false);
  let [display, setDisplay] = useState('');
  let [volume, setVolume] = useState(0.5);
  
  const handleOnClick = ()=>{
    setPower(!power);
    setDisplay('');
  }

  const handleVolumeChange = (value) => {
    setVolume(value);
  }

  //Power switch Component
  const SwitchButton = ({id, onClick, receivedPower}) => {
    return(
        <>
          <p><b>{id}</b></p>
          <div id={id} className={`switch ${receivedPower?'on':'off'}`} onClick={onClick} >
            <div className="switch-handle"></div>
          </div>
        </>
    )
  }

  //Display Component
  const Display = ({id, displayData}) => {
    
    return (
      <div id={id} className='display'>
        {displayData}
      </div>
    )
  }

  //Volume Slider Component
  const VolumeSlider = ({volume, onVolumeChange}) => {
    return (
      <div className='volume-slider'>
        <p><b>Volume:</b> {volume}</p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e)=> onVolumeChange(e.target.value)}
        />
      </div>
    )
  }
  VolumeSlider.propTypes = {
    volume: PropTypes.number.isRequired,
    onVolumeChange: PropTypes.func.isRequired
  }

  
  //Whole Drum Machine component
  return (
    <div id="drum-machine" className='container'>
      <div className='pad-bank'>
        {
          bankOne.map((item)=>{
            return <Pad id={item.soundname} label={item.label} power={power} audioSrc={item.url} setDisplay={setDisplay} volume={volume}/>
          })
        }  
      </div>
      <div className='controls-container'>
        <div className='control'>
          <SwitchButton id='Power' onClick={handleOnClick} receivedPower={power}/>
          <Display id='Display' displayData={display} />
        </div>
        <div className='volume-slider'>
          <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
        <div className='control'></div>
      </div>
    </div>
  );


}

export default App;
