import React, { useState } from "react";
import './SwitchButton.css';

const SwitchButton = ({id, onToggle}) => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        if (onToggle) {
            onToggle(!isOn);
        }
    };

    return(
        <div id={id} className={`switch ${isOn?'on':'off'}`} onClick={toggleSwitch}>
            <div className="switch-handle"></div>
        </div>
    )
}

export default SwitchButton;