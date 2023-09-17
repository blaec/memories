import React from 'react';

import MyListItem from "../../UI/MyListItem";

import {Divider, List, Toolbar} from "@mui/material";
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';


const getMenuItemsBlock = (itemsData) => {

    return  itemsData.map((item, index) => {
            const {text, icon} = item;

            return (
                <MyListItem
                    key={index}
                    caption={text}
                    icon={icon}
                />
            );
        }
    );
}

const mainItemsData = [
    {
        text: "Passwords",
        icon: <VpnKeyTwoToneIcon/>
    },
];
const settingsItemsData = [
    {
        text: "Settings",
        icon: <SettingsTwoToneIcon/>
    },
];

const MyMenu = () => {
    return (
        <div>
            <Toolbar/>
            <List>
                {getMenuItemsBlock(mainItemsData)}
                <Divider/>
                {getMenuItemsBlock(settingsItemsData)}
            </List>
        </div>
    )
};

export default MyMenu;