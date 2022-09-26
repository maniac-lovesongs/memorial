import React, { useState, useRef, useEffect } from 'react';
import "./NavBar.scss";

const NavBar = (input) => {

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
        <div className="navbar-container">
        </div>
    );
}

export default NavBar;
/***************************************************************/