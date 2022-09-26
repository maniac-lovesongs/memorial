import React, { useState, useRef, useEffect } from 'react';
import LandingLogo from "./LandingLogo/LandingLogo.js";
import WebsiteList from '../WebsiteList/WebsiteList.js';
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
            <div className="landing-container-inner-wrapper">
                <LandingLogo
                    isAlive={input.isAlive}
                    birthday={input.birthday}
                    deathday={input.deathday}
                    model={input.model}
                    string="Norman Peter Gonsalves"
                />
                <WebsiteList
                    model={input.model}
                />
            </div>
        </div>
    );
}

export default Landing;
