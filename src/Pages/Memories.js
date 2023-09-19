import React from 'react';
import {useSelector} from "react-redux";

import {Card, CardActionArea, CardContent, Typography} from "@mui/material";


const Memories = () => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);

    let link = isAlbumsLoaded ? (
        <a href={albums[1].album} target="_blank">
            <img
                src={albums[1].image}
                alt=""
                width="200"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = ""
                }}
            />
        </a>
    ) : null;

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                {link}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Memories;