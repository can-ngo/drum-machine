import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Pad =({id,label,audioSrc,power, setDisplay, volume}) => {
  //Styling state of Pad
  const [boxShadow, setBoxShadow] = useState('black 3px 3px 5px');
  const [backgroundColor, setBackgroundColor] = useState('grey');
  const [marginTop, setMarginTop] = useState('10px');
  const [height, setHeight] = useState('45px');
  //Ref for audio element
  const audioRef = useRef(null);

  let style = {
    height: height,
    backgroundColor: backgroundColor,
    marginTop: marginTop,
    boxShadow: boxShadow
    }
  
  useEffect(()=>{
    document.addEventListener('keydown',handleKeyDown);
    return ()=>{
    document.removeEventListener('keydown',handleKeyDown);
    };
  }, [power]);

  useEffect(()=>{
    document.addEventListener('keyup',handleKeyUp);
    return ()=>{
    document.removeEventListener('keyup',handleKeyUp);
    };
  }, [power]);

  const handleMouseDown = ()=>{
    setBoxShadow('none');
    setBackgroundColor('orange');
    setMarginTop('13px');
    setHeight('42px')
    if (power) {
      audioRef.current.play();
      setDisplay(id);
    }
  };

  const handleMouseUp = ()=>{
    setBoxShadow('black 3px 3px 5px');
    setBackgroundColor('grey');
    setMarginTop('10px');
    setHeight('45px');
  };

  const handleKeyDown = (event)=>{ 
    if (event.key.toUpperCase() === label.toUpperCase()){
      
      setBoxShadow('none');
      setBackgroundColor('orange');
      setMarginTop('13px');
      setHeight('42px');
      if (power)
      {
        audioRef.current.play();
        setDisplay(id);
      };
    }   
  };

  const handleKeyUp = ()=>{
    setBoxShadow('black 3px 3px 5px');
    setBackgroundColor('grey');
    setMarginTop('10px');
    setHeight('45px');
  };

  //Set volume level after receive volumn value
  useEffect(()=>{
    if(audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div
      id = {id}
      className='drum-pad'
      tabIndex={0} //Makes the div focusable and allows key events
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      style={style}
    >
      {label}
      <audio ref={audioRef} className='clip' id={label} src={audioSrc}></audio>
    </div>
  );
}

Pad.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  audioSrc: PropTypes.string,
  power: PropTypes.bool.isRequired,
  setDisplay: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired
}

export default Pad