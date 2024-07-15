import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Pad =({id,label,audioSrc,power}) => {
  //Styling state of Pad
  const [boxShadow, setBoxShadow] = useState('black 3px 3px 5px');
  const [backgroundColor, setBackgroundColor] = useState('grey');
  const [marginTop, setMarginTop] = useState('10px');
  const [height, setHeight] = useState('45px');
  //Ref for audio element
  const audioRef = useRef(null);

  let style = {
    cursor: 'pointer',
    userSelect: 'none',
    textAlign: 'center',
    width: '100px',
    height: height,
    paddingTop: '30px',
    backgroundColor: backgroundColor,
    marginRight: '10px',
    marginTop: marginTop,
    fontWeight: 'bold',
    borderRadius: '10px',
    boxShadow: boxShadow
    }
  
  useEffect(()=>{
    window.addEventListener('keydown',handleKeyDown);
    //Clean up the event listener on component unmount
    return ()=>{
      window.removeEventListener('keydown',handleKeyDown);
    };
  }, []);

  useEffect(()=>{
    window.addEventListener('keyup',handleKeyUp);
    //Clean up the event listener on component unmount
    return ()=>{
      window.removeEventListener('keyup',handleKeyUp);
    };
  }, []);

  const handleMouseDown = ()=>{
    console.log('mouse:',power);
    setBoxShadow('none');
    setBackgroundColor('orange');
    setMarginTop('13px');
    setHeight('42px')
    if (power && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    };
  };

  const handleMouseUp = ()=>{
    setBoxShadow('black 3px 3px 5px');
    setBackgroundColor('grey');
    setMarginTop('10px');
    setHeight('45px');
  };

  const handleKeyDown = (event)=>{ 
    if (event.key.toUpperCase() === label.toUpperCase()){
      console.log('key:',power);
      setBoxShadow('none');
      setBackgroundColor('orange');
      setMarginTop('13px');
      setHeight('42px');
      if (power && audioRef.current){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }   
  };

  const handleKeyUp = ()=>{
    setBoxShadow('black 3px 3px 5px');
    setBackgroundColor('grey');
    setMarginTop('10px');
    setHeight('45px');
  };

  return (
    <div
      id = {id}
      className='drum-pad'
      // tabIndex={0} //Makes the div focusable and allows key events
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
}

export default Pad