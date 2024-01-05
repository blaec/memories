import React from 'react';
import useAlbums from "../hooks/use-albums";
import {imageGroup} from "../Utils/Constants";


const Memories = () => {
    return useAlbums(imageGroup.memories);
};

export default Memories;