import React from 'react';

import MyListItem from "../../UI/MyListItem";
import {reactLinks} from "../../Utils/UriUtils";
import MyCollapseListItem from "../../UI/MyCollapseListItem";

import {List, Toolbar} from "@mui/material";
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import LuggageTwoToneIcon from '@mui/icons-material/LuggageTwoTone';
import ConnectingAirportsTwoToneIcon from '@mui/icons-material/ConnectingAirportsTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';


const getMenuItemsBlock = (itemsData) => {
    return  itemsData.map((item, index) => {
            const {text, link, icon, style} = item;

            return (
                <MyListItem
                    key={index}
                    caption={text}
                    link={link}
                    icon={icon}
                    style={style}
                />
            );
        }
    );
}

const mainItemsData = [
    {
        text: "Воспоминания",
        link: reactLinks.memories,
        icon: <EditNoteTwoToneIcon/>
    },
];
const guestItemsData = [
    {
        text: "В Израиле",
        link: reactLinks.settings,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "В Кременчуге",
        link: reactLinks.settings,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
];
const travelItemsData = [
    {
        text: "Израиля",
        link: reactLinks.settings,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "Кременчуга",
        link: reactLinks.settings,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "других стран",
        link: reactLinks.settings,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
];
const otherItemsData = [
    {
        text: "Разное",
        link: reactLinks.settings,
        icon: <PhotoSizeSelectActualTwoToneIcon/>
    },
];


const MyMenu = () => {

    return (
        <div>
            <Toolbar/>
            <List>
                {getMenuItemsBlock(mainItemsData)}
                <MyCollapseListItem
                    caption="В гостях"
                    icon={<LuggageTwoToneIcon/>}
                    menuBlock={() => getMenuItemsBlock(guestItemsData)}
                />
                <MyCollapseListItem
                    caption="Фото из"
                    icon={<ConnectingAirportsTwoToneIcon/>}
                    menuBlock={() => getMenuItemsBlock(travelItemsData)}
                />
                {getMenuItemsBlock(otherItemsData)}
                {/*<Divider/>*/}
            </List>
        </div>
    )
};

export default MyMenu;