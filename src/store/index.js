import {configureStore} from "@reduxjs/toolkit";

import albumReducer from './state/album/album-slice'



const store = configureStore({
    reducer: {
        album: albumReducer,

    },
});

export default store;