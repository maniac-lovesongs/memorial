import React, { useState, useRef, useEffect } from 'react';
import "./Landing.scss";

const Landing = (input) => {

    const [modelListenerId, setModelListenerId] = useState(null);
    useEffect(() => {
        const tempId = input.model.registerListener((propsChanged) => {
        });
        setModelListenerId(tempId);

        return function cleanup() {
            input.model.unregisterListener(appListenerId);
            setModelListenerId(null);
        }
    }, []);
    

    return (
        <div className="landing-container">
        </div>
    );
}

export default Landing;
/***************************************************************/