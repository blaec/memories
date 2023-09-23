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
    height: 100,
    overflow: 'hidden'
};
const _gridRoot = {px: 2};


const Memories = () => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);
    const {imageWidth} = useBreakpoint();

    const imageHeight = imageWidth * .6;
    const albumList = isAlbumsLoaded
        ? albums.imagesFromOtherCountries.map((album, index) => {
            const {albumLink, albumImage, title, description} = album;
            const _imageStyle = {width: imageWidth, height: imageHeight, objectFit: 'cover'};
            const errImage = `https://via.placeholder.com/${imageWidth}x${imageHeight}.png?text=${title}`;

            return (
                <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                    <Card sx={_cardRoot}>
                        <CardActionArea>
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

export default Memories;