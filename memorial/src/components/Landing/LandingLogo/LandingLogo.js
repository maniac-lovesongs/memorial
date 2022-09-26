import React, { useState, useRef, useEffect } from 'react';
import LandingLogoCharacter from './LandingLogoCharacter/LandingLogoCharacter.js';
import "./LandingLogo.scss";

const LandingLogo = (input) => {

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

    const makeChars = () => {
        return input.string.split("").map((ch, i) => {
            return <LandingLogoCharacter
                char={ch}
                index={i}
                key={i}
                model={input.model} />
        });
    };
    
    return (
        <div className="landinglogo-container"
            data-string={input.string}>
            <h4>In Loving Memory of</h4>
            {makeChars()}
            <h3>Engineer. Cricket Lover. Grandfather. Father</h3>
            <h4>July 26 1953 - 2022</h4>
        </div>
    );
}

export default LandingLogo;
/***************************************************************/