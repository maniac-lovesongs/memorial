import React, { useState, useRef, useEffect } from 'react';
import "./Logout.scss";

const Logout = (input) => {

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
        <div className="logout-container">
        </div>
    );
}

export default Logout;
/***************************************************************/