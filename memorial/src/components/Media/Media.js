import React, { useState, useRef, useEffect } from 'react';
import "./Media.scss";

const Media = (input) => {

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
        <div className="media-container">
        </div>
    );
}

export default Media;
/***************************************************************/