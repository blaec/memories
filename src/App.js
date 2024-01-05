import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import Layout from "./hoc/Layout";
import {reactLinks} from "./Utils/UriUtils";
import Memories from "./Pages/Memories";
import {fetchAlbums} from "./store/state/album/album-action";
import ImagesFromCountries from "./Pages/ImagesFromCountries";
import ImagesFromIsrael from "./Pages/ImagesFromIsrael";
import GuestsInIsrael from "./Pages/GuestsInIsrael";
import GuestsInKremenchuk from "./Pages/GuestsInKremenchuk";
import ImagesFromKremenchuk from "./Pages/ImagesFromKremenchuk";
import MiscImages from "./Pages/MiscImages";
import Instructions from "./Pages/Instructions/Instructions";


const App = () => {
    const dispatch = useDispatch();

    const {
        home,
        instructions,
        memories,
        guestsInIsrael,
        guestsInKremenchuk,
        picsFromIsrael,
        picsFromKremenchuk,
        picsFromCountries,
        misc,
    } = reactLinks;

    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={instructions} element={<Instructions/>}/>
                <Route path={memories} element={<Memories/>}/>
                <Route path={guestsInIsrael} element={<GuestsInIsrael/>}/>
                <Route path={guestsInKremenchuk} element={<GuestsInKremenchuk/>}/>
                <Route path={picsFromIsrael} element={<ImagesFromIsrael/>}/>
                <Route path={picsFromKremenchuk} element={<ImagesFromKremenchuk/>}/>
                <Route path={picsFromCountries} element={<ImagesFromCountries/>}/>
                <Route path={misc} element={<MiscImages/>}/>

                <Route path="*" element={<Navigate replace to={home}/>}/>
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
