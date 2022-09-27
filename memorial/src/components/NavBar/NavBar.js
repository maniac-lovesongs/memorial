import React, { useState, useRef, useEffect } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
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
    
    const iconStyles = {
        color: "rgba(255, 255, 255, 0.7)",
        marginTop: "8px"
    };

    return (
        <div className="navbar-container">
            <DragHandleIcon
                sx={iconStyles} />
        </div>
    );
}

export default NavBar;
/***************************************************************/