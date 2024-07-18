import React, { useCallback, useState } from 'react';
import './App.css';
import Pad from './Pad';
import './SwitchButton.css';

const bankOne = [{
  "key": 1,
  "label": "Q",
  "soundname": "Heater-1",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
},
{
  "key": 2,
  "label": "W",
  "soundname": "Heater-2",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
},
{
  "key": 3,
  "label": "E",
  "soundname": "Heater-3",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},
{
  "key": 4,
  "label": "A",
  "soundname": "Heater-4",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},
{
  "key": 5,
  "label": "S",
  "soundname": "Clap",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
},
{
  "key": 6,
  "label": "D",
  "soundname": "Open-HH",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
},
{
  "key": 7,
  "label": "Z",
  "soundname": "Kick-n-Hat",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},
{
  "key": 8,
  "label": "X",
  "soundname": "Kick",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},
{
  "key": 9,
  "label": "C",
  "soundname": "Closed-HH",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}
]

const bankTwo = [{
  "label": "Q",
  "soundname": "Chord-1",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
},
{
  "label": "W",
  "soundname": "Chord-2",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
},
{
  "label": "E",
  "soundname": "Chord-3",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
},
{
  "label": "A",
  "soundname": "Shaker",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
},
{
  "label": "S",
  "soundname": "Open-HH",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
},
{
  "label": "D",
  "soundname": "Closed-HH",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
},
{
  "label": "Z",
  "soundname": "Punchy-Kick",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
},
{
  "label": "X",
  "soundname": "Side-Stick",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
},
{
  "label": "C",
  "soundname": "Snare",
  "url": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
}
]

function App() {
  
  let [power, setPower] = useState(false);
  let [display, setDisplay] = useState('');
  let [volume, setVolume] = useState(20);
  
  
  const handleOnClick = ()=>{
    setPower(!power);
    setDisplay('');
  }

  const handleVolumeChange = (e) => {
    return setVolume(e.target.value);
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
  
  //Whole Drum Machine component
  return (
    <div id="drum-machine" className='container'>
      <div className='pad-bank'>
        {
          bankOne.map((item)=>{
            return <Pad key={item.key} id={item.soundname} label={item.label} power={power} audioSrc={item.url} setDisplay={setDisplay} volume={volume/100}/>
          })
        }  
      </div>
      <div className='controls-container'>
        <div className='control'>
          <SwitchButton id='Power' onClick={handleOnClick} receivedPower={power}/>
          <Display id='Display' displayData={display} />
          <p><b>Volume:</b> {volume}</p>
          <input
              id='volume-slider'
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume}
              onChange={handleVolumeChange}
            /> 
        </div>
      </div>
    </div>
  );


}

export default App;
