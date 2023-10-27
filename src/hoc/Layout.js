import React from 'react';

import MyToolbar from "../Toolbar/MyToolbar";
import {drawer, toolbarHeight} from "../Utils/Constants";

import Box from "@mui/material/Box";

const _root = {
    mt: {xs: `${toolbarHeight.mobile}px`, sm: `${toolbarHeight.desktop}px`},
    pl: {xs: 0, sm: `${drawer.width}px`},
};


const Layout = (props) => {
    const {children} = props;


    return (
        <div>
            <MyToolbar/>
            <Box sx={_root}>
                {children}
            </Box>
        </div>
    );
};

export default Layout;