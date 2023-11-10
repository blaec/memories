import React from 'react';

import InfoBlock from "./components/InfoBlock";
import {instructionsData} from "./components/InfoData";

import {Box} from "@mui/material";

const _root = {p: 2};


const Instructions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
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
    );
};

export default Instructions;