import React, { useState, useRef, useEffect } from 'react';
import LandingLogoCharacter from '../LandingLogoCharacter/LandingLogoCharacter.js';
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
                model={input.model} />
        });
    }
    return (
        <div className="landinglogo-container"
            data-string={input.string}>
            {makeChars()}
        </div>
    );
}

export default LandingLogo;
/***************************************************************/