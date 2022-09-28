import React, { useState, useRef, useEffect } from 'react';
import "./MediaUploader.scss";

const MediaUploader = (input) => {

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
        <div className="mediauploader-container">
        </div>
    );
}

export default MediaUploader;
/***************************************************************/