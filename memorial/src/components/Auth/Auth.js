import React, { useState, useRef, useEffect } from 'react';
import "./Auth.scss";

const Auth = (input) => {

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
        <div className="auth-container">
        </div>
    );
}

export default Auth;
/***************************************************************/