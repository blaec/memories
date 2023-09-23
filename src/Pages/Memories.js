import React from 'react';
import {useSelector} from "react-redux";

import {Card, CardActionArea, CardContent, Typography} from "@mui/material";


const Memories = () => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);

    return isAlbumsLoaded
        ? albums.imagesFromOtherCountries.map((album) =>
            (<Card sx={{maxWidth: 500, mt: 2, borderRadius: 4, transition: '0.2s', '&:hover': {
                        transform: 'scale(1.05)',
                    }}}>
                    <CardActionArea>
                        <a href={album.album}
                           target="_blank"
                           rel="noreferrer"
                        >
                            <img
                                src={album.image}
                                alt=""
                                style={{width: 500, height: 300, 'object-fit': 'cover'}}
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