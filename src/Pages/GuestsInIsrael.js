import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const GuestsInIsrael = () => {
    return useAlbums(imageGroup.guestsInIsrael);
};

export default GuestsInIsrael;