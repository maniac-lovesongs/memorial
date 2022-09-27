import React, { useState, useRef, useEffect } from 'react';
import Landing from "../Landing/Landing.js";
import "./Website.scss";

const Website = (input) => {

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
        <div className="website-container">
            <Landing 
                isAlive={true}
                birthday={"July 26, 1957"}
                deathday={null}
                model={input.model}
            />
        </div>
    );
}

export default Website;
/***************************************************************/