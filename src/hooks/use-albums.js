import React from 'react';
import {useSelector} from "react-redux";

import {Grid} from "@mui/material";
import AlbumList from "./components/AlbumList";

const _gridRoot = {px: 2, pb: 2};


const useAlbums = (link) => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);

    const albumList = isAlbumsLoaded
        ? <AlbumList albums={albums[link]}/>
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