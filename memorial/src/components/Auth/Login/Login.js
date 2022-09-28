import React, { useState, useRef, useEffect } from 'react';
import "./Login.scss";

const Login = (input) => {

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
        <div className="login-container">
        </div>
    );
}

export default Login;
/***************************************************************/