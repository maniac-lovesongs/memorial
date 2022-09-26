import React, { useState, useRef, useEffect } from 'react';
import LandingLogo from "../LandingLogo/LandingLogo.js";
import FadingHorizontalRule from "../FadingHorizontalRule/FadingHorizontalRule.js";
import "./Landing.scss";

const Landing = (input) => {
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
        <div className="landing-container">
            <LandingLogo 
                model={input.model}
                string="Norman Peter Gonsalves"
            />
            <FadingHorizontalRule
                model={input.model}
            />
        </div>
    );
}

export default Landing;
/***************************************************************/