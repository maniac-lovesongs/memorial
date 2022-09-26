import React, { useState, useRef, useEffect } from 'react';
import WebsiteCard from "../WebsiteCard/WebsiteCard.js";
import WebsiteCardModel from '../../models/WebsiteCard/WebsiteCardModel.js';
import guyanaCricketImg from "../../imgs/guyana_cricket.png";
import plainwaterImg from "../../imgs/plainwater.png";
import theGonsalvesImg from "../../imgs/thegonsalves.png";
import "./WebsiteList.scss";

console.log(guyanaCricketImg);
console.log(plainwaterImg);
console.log(theGonsalvesImg);

const WebsiteList = (input) => {

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
    const makeList = () => {
        const items = [new WebsiteCardModel("plainwater.com", plainwaterImg),
        new WebsiteCardModel("guyana-cricket.com", guyanaCricketImg),
        new WebsiteCardModel("thegonsalves.com",theGonsalvesImg)
        ];

        return items.map((c, i) => {
            return <WebsiteCard
                model={input.model}
                websiteName={c.name}
                image={c.image}
            />
        })
    }
    return (
        <div className="websitelist-container">
            {makeList()}
        </div>
    );
}

export default WebsiteList;
/***************************************************************/