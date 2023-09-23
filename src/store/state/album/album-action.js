import axios from "../../../axios-album";
import {albumActions} from "./album-slice";

export const fetchAlbums = () => {
    return async (dispatch) => {
        axios.get("")
            .then(response => {
                const {data} = response;
                dispatch(albumActions.setAlbums(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}
