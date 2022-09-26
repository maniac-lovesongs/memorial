import React, { useState, useRef, useEffect } from 'react';
import WebsiteCard from "../WebsiteCard/WebsiteCard.js";
import WebsiteCardModel from '../../models/WebsiteCard/WebsiteCardModel.js';
import guyanaCricketImg from "../../imgs/guyana_cricket.png";
import plainwaterImg from "../../imgs/plainwater.png";
import theGonsalvesImg from "../../imgs/thegonsalves.png";
import "./WebsiteList.scss";

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
        const items = [new WebsiteCardModel("plainwater.com", plainwaterImg, "https://plainwater.com"),
        new WebsiteCardModel("guyana-cricket.com", guyanaCricketImg, "https://guyana-cricket.com"),
        new WebsiteCardModel("thegonsalves.com",theGonsalvesImg, "https://thegonsalves.com")
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