import React from 'react';
import {useSelector} from "react-redux";

import AlbumList from "./components/AlbumList";
import {isAddedRecently} from "../Utils/Utils";
import {imageGroup} from "../Utils/Constants";

import {Grid} from "@mui/material";

const _gridRoot = {px: 2, pb: 2};


const useAlbums = (link) => {
    const {albums, isAlbumsLoaded} = useSelector(state => state.album.albums);

    let albumList = null;
    if (isAlbumsLoaded) {
        const filteredAlbums = link === imageGroup.newImages
            ? Object.values(albums).flat().filter(a => isAddedRecently(a.added))
            : albums[link];
        albumList = <AlbumList albums={filteredAlbums}/>
    }


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