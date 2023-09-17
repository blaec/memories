import {useEffect, useState} from "react";
import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import Layout from "./hoc/Layout";
import {reactLinks} from "./Utils/UriUtils";
import Memories from "./Pages/Memories";
import Settings from "./Pages/Settings";


const App = () => {
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
