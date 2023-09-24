import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import Layout from "./hoc/Layout";
import {reactLinks} from "./Utils/UriUtils";
import Memories from "./Pages/Memories";
import Settings from "./Pages/Settings";
import {fetchAlbums} from "./store/state/album/album-action";
import ImagesFromCountries from "./Pages/ImagesFromCountries";
import ImagesFromIsrael from "./Pages/ImagesFromIsrael";


const App = () => {
    const dispatch = useDispatch();

    const {
        memories,
        guestInIsrael,
        guestInKremenchuk,
        picsFromIsrael,
        picsFromKremenchuk,
        picsFromCountries,
        misc,
    } = reactLinks;

    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={memories} element={<Memories/>}/>
                <Route path={guestInIsrael} element={<Memories/>}/>
                <Route path={guestInKremenchuk} element={<Memories/>}/>
                <Route path={picsFromIsrael} element={<ImagesFromIsrael/>}/>
                <Route path={picsFromKremenchuk} element={<Memories/>}/>
                <Route path={picsFromCountries} element={<ImagesFromCountries/>}/>
                <Route path={misc} element={<Settings/>}/>

                <Route path="*" element={<Navigate replace to={memories}/>}/>
            </Routes>
        </Layout>
    );

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);


    return (
        <>
            {layout}
        </>
    );
}

export default App;
