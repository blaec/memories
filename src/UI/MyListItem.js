import React from 'react';
import {NavLink} from "react-router-dom";

import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";


const MyListItem = (props) => {
    const {caption, icon, link, style, pathname, onClick} = props;

    const isSelected = pathname.includes(link);
    const activeColor = isSelected ? {color: 'primary.main'} : null;


    return (
        <ListItemButton
            selected={isSelected}
            component={NavLink} to={link}
            sx={style}
            onClick={onClick}
        >
            <ListItemIcon sx={activeColor}>{icon}</ListItemIcon>
            <ListItemText sx={activeColor} primary={caption}/>
        </ListItemButton>
    );
};

export default MyListItem;