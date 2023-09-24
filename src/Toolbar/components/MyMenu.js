import React from 'react';
import {useLocation} from "react-router";

import MyListItem from "../../UI/MyListItem";
import {reactLinks} from "../../Utils/UriUtils";
import MyCollapseListItem from "../../UI/MyCollapseListItem";

import {List, Toolbar} from "@mui/material";
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import LuggageTwoToneIcon from '@mui/icons-material/LuggageTwoTone';
import ConnectingAirportsTwoToneIcon from '@mui/icons-material/ConnectingAirportsTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';


const getMenuItemsBlock = (itemsData, pathname) => {
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
        link: reactLinks.guestInIsrael,
        icon: <ArrowRightTwoToneIcon/>,
        style: {pl: 4}
    },
    {
        text: "В Кременчуге",
        link: reactLinks.guestInKremenchuk,
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


const MyMenu = () => {
    const {pathname} = useLocation();

    return (
        <div>
            <Toolbar/>
            <List>
                {getMenuItemsBlock(mainItemsData, pathname)}
                <MyCollapseListItem
                    caption="В гостях"
                    icon={<LuggageTwoToneIcon/>}
                    menuBlock={() => getMenuItemsBlock(guestItemsData, pathname)}
                />
                <MyCollapseListItem
                    caption="Фото из"
                    icon={<ConnectingAirportsTwoToneIcon/>}
                    menuBlock={() => getMenuItemsBlock(travelItemsData, pathname)}
                />
                {getMenuItemsBlock(otherItemsData, pathname)}
                {/*<Divider/>*/}
            </List>
        </div>
    )
};

export default MyMenu;