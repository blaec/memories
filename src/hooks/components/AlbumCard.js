import React, {useState} from 'react';

import {cardType, RECENT_PERIOD} from "../../Utils/Constants";
import Iframe from "./Iframe";
import LinkedImage from "./LinkedImage";
import useBreakpoint from "../use-breakpoint";
import {isAddedRecently} from "../../Utils/Utils";

import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Tooltip, Typography} from "@mui/material";
import CameraTwoToneIcon from '@mui/icons-material/CameraTwoTone';

const _cardRoot = {
    mt: 2,
    borderRadius: 3,
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
    const {index, album: {albumLink, albumImage, title, description, type, period, added}} = props;
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
    const chipLabel = type !== undefined
        ? "видео"
        : "альбом"

    const newAlbum = isAddedRecently(added)
        ? <Tooltip title={`Добавлено за последние ${RECENT_PERIOD} дней`}><Chip label="новинка" color="error" size="small"/></Tooltip>
        : <Chip icon={<CameraTwoToneIcon />} label={chipLabel} variant="outlined" size="small"/>


    return (
        <Card sx={_cardRoot} elevation={3}>
            <CardHeader
                avatar={newAlbum}
                title={period}
                // subheader="subheader"
            />
            <CardMedia>
                {albumCard}
            </CardMedia>
            <CardActionArea>
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