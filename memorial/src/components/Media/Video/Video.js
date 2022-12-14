import React, { useState, useRef, useEffect } from 'react';
import "./Video.scss";

const Video = (input) => {

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
        <div className="video-container">
        </div>
    );
}

export default Video;
/***************************************************************/