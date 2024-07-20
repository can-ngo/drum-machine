import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


const Pad =({id,label,audioSrc,power, setDisplay, volume}) => {
  //Styling state of Pad
  const [initialStyle, setInActiveStyle] = useState({height: '45px', backgroundColor:'grey',marginTop:'10px', boxShadow:'black 3px 3px 5px'});
  //Ref for audio element
  const audioRef = useRef(null);

  let activeStyle = {boxShadow: 'none',
                     backgroundColor:'orange',
                     marginTop:'13px',
                     height:'42px'};
  
  let inActiveStyle = {boxShadow:'black 3px 3px 5px',
                       backgroundColor:'grey',
                       marginTop:'10px',
                       height: '45px' }

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
    setInActiveStyle(activeStyle);
    if (power) {
      audioRef.current.play();
      setDisplay(id);
    }
  };

  const handleMouseUp = ()=>{
    setInActiveStyle(inActiveStyle);
  };

  const handleKeyDown = (event)=>{ 
    if (event.key.toUpperCase() === label.toUpperCase()){   
      setInActiveStyle(activeStyle);
      if (power)
      {
        audioRef.current.play();
        setDisplay(id);
      };
    }   
  };

  const handleKeyUp = ()=>{
    setInActiveStyle(inActiveStyle);
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
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      style={initialStyle}
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