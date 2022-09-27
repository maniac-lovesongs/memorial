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
    
    const determineTopHeading = () => {
        if (input.isAlive)
            return <h4>Collection of Websites by</h4>
        else return <h4>In Loving Memory of</h4>
    }

    const determineBottomHeading = () => {
        if (input.isAlive)
            return null;

        return <h4>{input.birthday} - {input.deathday}</h4>
    }

    return (
        <div className="landinglogo-container"
            data-string={input.string}>
            {determineTopHeading()}
            <div className="chars">{makeChars()}</div>
            <h3>Engineer<b>.</b> Cricket Lover<b>.</b> Husband<b>.</b> Grandfather<b>.</b> Father<b>.</b></h3>
            {determineBottomHeading()}
        </div>
    );
}

export default LandingLogo;
/***************************************************************/