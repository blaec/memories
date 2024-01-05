import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const GuestsInKremenchuk = () => {
    return useAlbums(imageGroup.guestsInKremenchuk);
};

export default GuestsInKremenchuk;