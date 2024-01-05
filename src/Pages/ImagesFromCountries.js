import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const ImagesFromCountries = () => {
    return useAlbums(imageGroup.imagesFromOtherCountries);
};

export default ImagesFromCountries;