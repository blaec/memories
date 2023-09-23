import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import Layout from "./hoc/Layout";
import {reactLinks} from "./Utils/UriUtils";
import Memories from "./Pages/Memories";
import Settings from "./Pages/Settings";
import {fetchAlbums} from "./store/state/album/album-action";


const App = () => {
    const dispatch = useDispatch();

    const {
        memories,
        settings,
    } = reactLinks;

    const layout = (
        <Layout>
            <Routes>

                {/* Menu items */}
                <Route path={memories} element={<Memories/>}/>
                <Route path={settings} element={<Settings/>}/>
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
