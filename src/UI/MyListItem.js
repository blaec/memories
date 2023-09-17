import React from 'react';

import {ListItem, ListItemIcon, ListItemText} from "@mui/material";


const MyListItem = (props) => {
    const {caption, icon} = props;


    return (
        <ListItem
            button
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={caption}/>
        </ListItem>
    );
};

export default MyListItem;