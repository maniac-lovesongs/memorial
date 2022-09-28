import React, { useState, useRef, useEffect } from 'react';
import "./Photo.scss";

const Photo = (input) => {

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
        <div className="photo-container">
        </div>
    );
}

export default Photo;
/***************************************************************/