import React, { useState, useRef, useEffect } from 'react';
import "./Loading.scss";

const Loading = (input) => {

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
        <div className="loading-container">
        </div>
    );
}

export default Loading;
/***************************************************************/