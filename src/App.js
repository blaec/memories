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
    }, []);


    return (
        <>
            {layout}
        </>
    );

    // const [posts, setPosts] = useState([]);
    //
    // const getData = () => {
    //     var requestOptions = {
    //         method: "GET",
    //         redirect: "follow",
    //     };
    //
    //     fetch("http://localhost:3033/posts", requestOptions)
    //         .then((response) => response.json())
    //         .then((result) => setPosts(result))
    //         .catch((error) => console.log("error", error));
    // };
    //
    // useEffect(() => {
    //     getData();
    // }, []);
    //
    // return (
    //     <div>
    //         {posts.map((post) => (
    //             <div key={post.id}>
    //                 <h3>
    //                     <span>{post.id}</span> {post.title}
    //                 </h3>
    //                 <p>{post.body}</p>
    //             </div>
    //         ))}
    //     </div>
    // );
}

export default App;
