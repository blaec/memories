import React from 'react';
import {useSelector} from "react-redux";

import {Card, CardActionArea, CardContent, Typography} from "@mui/material";


const Memories = () => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);

    return isAlbumsLoaded
        ? albums.map((album) =>
            (<Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <a href={album.album}
                           target="_blank"
                           rel="noreferrer"
                        >
                            <img
                                src={album.image}
                                alt=""
                                style={{width: '350px', height: '200px', 'object-fit': 'cover'}}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = ""
                                }}
                            />
                        </a>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {album.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {album.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            ))
        : null;
};

export default Memories;