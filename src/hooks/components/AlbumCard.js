import React, {useState} from 'react';

import {cardType} from "../../Utils/Constants";
import Iframe from "./Iframe";
import LinkedImage from "./LinkedImage";
import useBreakpoint from "../use-breakpoint";

import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

const _cardRoot = {
    mt: 2,
    borderRadius: 2,
    transition: '0.2s', '&:hover': {
        transform: 'scale(1.03)',
    }
};
const _cardContentFixed = {
    minHeight: 100,
};
const _cardContent = {
    height: 100,
    overflow: 'hidden',
};


const AlbumCard = (props) => {
    const {index, album: {albumLink, albumImage, title, description, type}} = props;
    const {imageWidth} = useBreakpoint();
    const imageHeight = imageWidth * .6;
    const [selected, setSelected] = useState(-1);

    const _cardContext = [
        selected === index ? null : _cardContent,
        _cardContentFixed
    ];

    const handleViewDescription = (index) => {
        setSelected(selected === index ? -1 : index);
    };

    const albumCard = type === cardType.youtube
        ? (
            <Iframe
                title={title}
                width={imageWidth}
                height={imageHeight}
                link={albumLink}
            />
        )
        : (
            <LinkedImage
                type={type}
                link={albumLink}
                image={albumImage}
                title={title}
                width={imageWidth}
                height={imageHeight}
            />
        );


    return (
        <Card sx={_cardRoot} elevation={3}>
            <CardActionArea>
                {albumCard}
                <CardContent sx={_cardContext}
                             onClick={() => handleViewDescription(index)}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AlbumCard;