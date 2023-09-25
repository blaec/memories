import React from 'react';
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
const _cardContent = {
    height: 180,
    overflow: 'hidden'
};
const _gridRoot = {px: 2, pb: 2};


const useAlbums = (link) => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);
    const {imageWidth} = useBreakpoint();

    const imageHeight = imageWidth * .6;
    const albumList = isAlbumsLoaded
        ? albums[link].map((album, index) => {
            const {albumLink, albumImage, title, description, type} = album;
            const _imageStyle = {width: imageWidth, height: imageHeight, objectFit: 'cover'};
            const errImage = `https://via.placeholder.com/${imageWidth}x${imageHeight}.png?text=${title}`;

            let albumCard = type === "youtube"
                ? (
                    <iframe
                        width={imageWidth}
                        height={imageHeight}
                        src={albumLink}
                        allowFullScreen>
                    </iframe>
                )
                : (
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
                    </a>
                );


            return (
                <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                    <Card sx={_cardRoot}>
                        <CardActionArea>
                            {albumCard}
                            <CardContent sx={_cardContent}>
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