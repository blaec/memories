import React from 'react';

import MyMenu from "./MyMenu";
import {drawer} from "../../Utils/Constants";

import {Box, Drawer} from "@mui/material";


const MyDrawer = (props) => {
    const {window, mobileOpen, onToggle} = props;

    const container = window !== undefined
        ? () => window().document.body
        : undefined;

    const box = {width: {sm: drawer.width}, flexShrink: {sm: 0}};
    const drawerMobile = {
        display: {xs: 'block', sm: 'none'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawer.width},
    };
    const drawerDesktop = {
        display: {xs: 'none', sm: 'block'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawer.width},
    };


    return (
        <Box
            sx={box}
            component="nav"
        >
            <Drawer
                sx={drawerMobile}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={onToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <MyMenu/>
            </Drawer>
            <Drawer
                sx={drawerDesktop}
                variant="permanent"
                open
            >
                <MyMenu/>
            </Drawer>
        </Box>
    );
};

export default MyDrawer;