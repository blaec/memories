import React from 'react';
import useAlbums from "../hooks/use-albums";

const ImagesFromCountries = () => {
    return useAlbums("imagesFromOtherCountries");
};

export default ImagesFromCountries;