import React from 'react';

import MyAppBar from "./components/MyAppBar";
import MyDrawer from "./components/MyDrawer";

import {Box, CssBaseline} from "@mui/material";


const MyToolbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const box = {display: 'flex'};

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box sx={box}>
            <CssBaseline/>
            <MyAppBar onToggle={handleDrawerToggle}/>
            <MyDrawer
                mobileOpen={mobileOpen}
                onToggle={handleDrawerToggle}
            />
        </Box>
    );
};

export default MyToolbar;