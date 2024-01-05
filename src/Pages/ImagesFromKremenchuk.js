import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const ImagesFromKremenchuk = () => {
    return useAlbums(imageGroup.imagesFromKremenchuk);
};

export default ImagesFromKremenchuk;