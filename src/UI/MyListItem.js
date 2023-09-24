import React from 'react';
import {NavLink} from "react-router-dom";

import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";


const MyListItem = (props) => {
    const {caption, icon, link, style} = props;


    return (
        <ListItemButton component={NavLink} to={link} sx={style}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItemButton>
    );
};

export default MyListItem;