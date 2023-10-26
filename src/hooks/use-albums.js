import React, {useState} from 'react';
import {useSelector} from "react-redux";

import useBreakpoint from "../hooks/use-breakpoint";

import {Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";

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
const _gridRoot = {px: 2, pb: 2};
const _playButton = {
    position: 'absolute',
    width: '70px',
    height: '50px',
    left: '50%',
    top: '50%',
    marginLeft: '-35px', /*half of the width */
    marginTop: '-25px', /*half of the height */
};
const _container = {
    position: 'relative'
};
const _hidden = {
    display: 'none',
};


const useAlbums = (link) => {
    const [selected, setSelected] = useState(-1);
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);
    const {imageWidth} = useBreakpoint();

    const handleViewDescription = (index) => {
        setSelected(selected === index ? -1 : index);
    };

    const imageHeight = imageWidth * .6;
    const albumList = isAlbumsLoaded
        ? albums[link].map((album, index) => {
            const {albumLink, albumImage, title, description, type} = album;
            const _imageStyle = {width: imageWidth, height: imageHeight, objectFit: 'cover'};
            const errImage = `https://via.placeholder.com/${imageWidth}x${imageHeight}.png?text=${title}`;

            let youtubeButtonStyle = type === 'youtubeManual' ? _playButton : _hidden;
            let albumCard = type === "youtube"
                ? (
                    <iframe
                        title={title}
                        width={imageWidth}
                        height={imageHeight}
                        src={albumLink}
                        allowFullScreen>
                    </iframe>
                )
                : (
                    <div style={_container}>
                        <a href={albumLink}
                           target="_blank"
                           rel="noreferrer"
                        >
                            <img
                                src={albumImage}
                                alt=""
                                style={_imageStyle}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = {errImage}
                                }}
                            />
                            <img
                                src="/images/yt_playbutton.png"
                                alt=""
                                style={youtubeButtonStyle}
                            />
                        </a>
                    </div>
                );


            return (
                <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                    <Card sx={_cardRoot} elevation={3}>
                        <CardActionArea>
                            {albumCard}
                            <CardContent sx={[selected === index ? null : _cardContent, _cardContentFixed]}
                                         onClick={() => handleViewDescription(index)}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        })
        : null;


    return (
        <Grid
            container
            sx={_gridRoot}
            spacing={2}
        >
            {albumList}
        </Grid>
    );
};

export default useAlbums;