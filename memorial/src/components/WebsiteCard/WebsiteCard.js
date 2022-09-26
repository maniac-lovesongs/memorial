import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import "./WebsiteCard.scss";
import { fontFamily } from '@mui/system';

const WebsiteCard = (input) => {
    console.log("image passed into WebsiteCard");
    console.log(input.image);
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
    

    const cardMediaStyles = {
        height: "200px",
        margin: '1em',
        marginBottom: '0em'
    };

    const cardContentStyles = {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "300",
        padding: "1.5em",
        textTransform: "uppercase"
    };

    const cardStyles = {
        backgroundColor: 'white',
        borderRadius: '0em',
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 25px 0px",
        transition: "all 0.3s ease 0s"
    };
    return (
        <Card
            sx={cardStyles}
            className="websitecard-container">
            <CardMedia
                sx={cardMediaStyles}
                image={input.image}
            />
            <CardContent
                sx={cardContentStyles}
            >
                {input.websiteName}
            </CardContent>
        </Card>
    );
}

export default WebsiteCard;
/***************************************************************/