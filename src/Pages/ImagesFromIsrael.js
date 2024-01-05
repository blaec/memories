import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const ImagesFromIsrael = () => {
    return useAlbums(imageGroup.imagesFromIsrael);
};

export default ImagesFromIsrael;