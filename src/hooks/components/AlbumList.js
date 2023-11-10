import React from 'react';

import AlbumCard from "./AlbumCard";

import {Grid} from "@mui/material";


const AlbumList = (props) => {
    const {albums} = props;


    return albums.map((album, index) =>
        (
            <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                <AlbumCard
                    index={index}
                    album={album}
                />
            </Grid>
        ));
};

export default AlbumList;