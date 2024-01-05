import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const MiscImages = () => {
    return useAlbums(imageGroup.miscImages);
};

export default MiscImages;