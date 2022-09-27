import React, { useState, useEffect } from 'react';
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
        backgroundColor: "rgba(255,255,255,0.10)",
        padding: "5px",
        cursor: "pointer"
    };

    return (
        <div className="navbar-container">
            <div className='left-col'>
                <DragHandleIcon
                    sx={iconStyles} />
            </div>
        </div>
    );
}

export default NavBar;
