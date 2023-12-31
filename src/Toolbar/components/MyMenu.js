import React from 'react';
import {useLocation} from "react-router";

import MyListItem from "../../UI/MyListItem";
import {reactLinks} from "../../Utils/UriUtils";
import MyCollapseListItem from "../../UI/MyCollapseListItem";

import {Divider, List, Toolbar} from "@mui/material";
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import LuggageTwoToneIcon from '@mui/icons-material/LuggageTwoTone';
import ConnectingAirportsTwoToneIcon from '@mui/icons-material/ConnectingAirportsTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';


const getMenuItemsBlock = (itemsData, pathname, onClick) => {
    return  itemsData.map((item, index) => {
            const {text, link, icon, style} = item;

            return (
                <MyListItem
                    key={index}
                    caption={text}
                    link={link}
                    icon={icon}
                    style={style}
                    pathname={pathname}
                    onClick={onClick}
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
        text: "в Израиле",
        link: reactLinks.guestsInIsrael,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "в Кременчуге",
        link: reactLinks.guestsInKremenchuk,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
];
const travelItemsData = [
    {
        text: "Израиля",
        link: reactLinks.picsFromIsrael,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "Кременчуга",
        link: reactLinks.picsFromKremenchuk,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "других стран",
        link: reactLinks.picsFromCountries,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
];
const otherItemsData = [
    {
        text: "Разное",
        link: reactLinks.misc,
        icon: <PhotoSizeSelectActualTwoToneIcon/>
    },
];
const settingsItemData = [
    {
        text: "Инструкции",
        link: reactLinks.instructions,
        icon: <HelpTwoToneIcon/>
    },
];


const MyMenu = (props) => {
    const{onClick} = props;
    const {pathname} = useLocation();

    return (
        <div>
            <Toolbar/>
            <List>
                {getMenuItemsBlock(settingsItemData, pathname, onClick)}
                <Divider/>
                {getMenuItemsBlock(mainItemsData, pathname, onClick)}
                <MyCollapseListItem
                    caption="В гостях"
                    icon={<LuggageTwoToneIcon/>}
                    menuItems={guestItemsData}
                    menuBlock={() => getMenuItemsBlock(guestItemsData, pathname, onClick)}
                />
                <MyCollapseListItem
                    caption="Фото из"
                    icon={<ConnectingAirportsTwoToneIcon/>}
                    menuItems={travelItemsData}
                    menuBlock={() => getMenuItemsBlock(travelItemsData, pathname, onClick)}
                />
                {getMenuItemsBlock(otherItemsData, pathname, onClick)}
            </List>
        </div>
    )
};

export default MyMenu;