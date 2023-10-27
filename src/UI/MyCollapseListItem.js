import React, {useState} from 'react';
import {useLocation} from "react-router";

import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";


const MyCollapseListItem = (props) => {
    const {caption, icon, menuItems, menuBlock} = props;
    const {pathname} = useLocation();
    const [open, setOpen] = useState(menuItems && menuItems.some(mi => mi.link === pathname));

    const handleClick = () => {
        setOpen(!open);
    };


    return <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={caption}/>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {menuBlock()}
            </List>
        </Collapse>
    </>;
};

export default MyCollapseListItem;