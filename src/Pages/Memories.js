import React from 'react';

import useAlbums from "../hooks/use-albums";



const Memories = () => {
    return useAlbums("imagesFromOtherCountries");
};

export default Memories;