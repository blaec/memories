import React from 'react';

import MyMenu from "./MyMenu";
import {drawer} from "../../Utils/Constants";

import {Box, Drawer} from "@mui/material";

const _box = {
    width: {sm: drawer.width},
    flexShrink: {sm: 0}
};
const _drawerMobile = {
    display: {xs: 'block', sm: 'none'},
    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawer.width},
};
const _drawerDesktop = {
    display: {xs: 'none', sm: 'block'},
    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawer.width},
};


const MyDrawer = (props) => {
    const {window, mobileOpen, onToggle} = props;

    const container = window !== undefined
        ? () => window().document.body
        : undefined;


    return (
        <Box
            sx={_box}
            component="nav"
        >
            <Drawer
                sx={_drawerMobile}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={onToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <MyMenu onClick={onToggle}/>
            </Drawer>
            <Drawer
                sx={_drawerDesktop}
                variant="permanent"
                open
            >
                <MyMenu/>
            </Drawer>
        </Box>
    );
};

export default MyDrawer;