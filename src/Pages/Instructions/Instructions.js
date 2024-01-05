import React from 'react';

import InfoBlock from "./components/InfoBlock";
import {instructionsData} from "./components/InfoData";
import useAlbums from "../../hooks/use-albums";
import {imageGroup, RECENT_PERIOD} from "../../Utils/Constants";

import {Box, Chip, Divider} from "@mui/material";

const _root = {p: 2};
const _newAlbums = {mt: 3};


const Instructions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <>
            <Box sx={_root}>
                {instructionsData.map((data) => (
                    <InfoBlock
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        subtitle={data.subtitle}
                        info={data.info}
                        expanded={expanded}
                        onChange={handleChange}
                    />
                ))}
            </Box>
            <Box>
                <Divider sx={_newAlbums}>
                    <Chip
                        label={`Новинки за последние ${RECENT_PERIOD} дней`}
                        color="error"
                        variant="outlined"
                    />
                </Divider>
                {useAlbums(imageGroup.newImages)}
            </Box>
        </>
    );
};

export default Instructions;