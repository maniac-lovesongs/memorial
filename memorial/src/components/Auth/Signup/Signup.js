import React, { useState, useRef, useEffect } from 'react';
import "./Signup.scss";

const Signup = (input) => {

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
        <div className="signup-container">
        </div>
    );
}

export default Signup;
/***************************************************************/