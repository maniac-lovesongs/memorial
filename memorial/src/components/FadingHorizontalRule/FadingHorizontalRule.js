import React, { useState, useRef, useEffect } from 'react';
import "./FadingHorizontalRule.scss";

const FadingHorizontalRule = (input) => {

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
        <div className="fadinghorizontalrule-container">
        </div>
    );
}

export default FadingHorizontalRule;
/***************************************************************/