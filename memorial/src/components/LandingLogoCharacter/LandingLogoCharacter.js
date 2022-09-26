import React, { useState, useRef, useEffect } from 'react';
import "./LandingLogoCharacter.scss";

const LandingLogoCharacter = (input) => {

    const [modelListenerId, setModelListenerId] = useState(null);
    useEffect(() => {
        const tempId = input.model.registerListener((propsChanged) => {
        });
        setModelListenerId(tempId);

        return function cleanup() {
            input.model.unregisterListener(modelListenerId);
            setModelListenerId(null);
        }
    }, []);
    

    return (
        <span
            key={input.index}
            data-id={input.index}
            data-value={input.char}
            className="landinglogocharacter-container">
            {input.char}
        </span>
    );
}

export default LandingLogoCharacter;
/***************************************************************/