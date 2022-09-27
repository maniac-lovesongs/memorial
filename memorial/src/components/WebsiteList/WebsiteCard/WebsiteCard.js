import React, { useState, useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import "./WebsiteCard.scss";

const WebsiteCard = (input) => {

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
        height: "150px",
      //  margin: '1em',
      //  borderRadius: '5px',
        marginBottom: '0em'
    };

    const cardContentStyles = {
     //   fontFamily: "'Montserrat', sans-serif",
      //  fontWeight: "800",
        fontSize: "0.9em",
        padding: "2em",
        textTransform: "uppercase",
        backgroundColor: "white",
        color: "rgb(0, 46, 79)"
    };

    const cardStyles = {
        backgroundColor: 'white',
        borderRadius: '0em',
        borderRadius: '15px',
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 25px 0px",
        transition: "all 0.3s ease 0s"
    };

    const iconStyles = {
        position: "relative",
        top: "5px",
        left: "-10px"
    };
    return (
        <a href={input.link}>
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
                <div className="website-name">{input.websiteName}</div>
            </CardContent>
            </Card>
        </a>
    );
}

export default WebsiteCard;
/***************************************************************/