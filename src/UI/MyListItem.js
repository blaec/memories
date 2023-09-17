import React from 'react';
import {NavLink} from "react-router-dom";

import {ListItem, ListItemIcon, ListItemText} from "@mui/material";


const MyListItem = (props) => {
    const {caption, icon, link} = props;


    return (
        <ListItem
            button
            component={NavLink} to={link}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItem>
    );
};

export default MyListItem;