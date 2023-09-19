import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    albums: {albums: '', isAlbumsLoaded: false},
};

const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        setAlbums(state, action) {
            state.albums = {albums: action.payload, isAlbumsLoaded: true};
        },
    }
});

export const albumActions = albumSlice.actions;
export default albumSlice.reducer;