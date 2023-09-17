import {useEffect, useState} from "react";
import React from 'react';

import Layout from "./hoc/Layout";


const App = () => {
    const layout = (
        <Layout>
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
