import React from 'react';

import {Typography} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

const _summary = {backgroundColor: "#e3f2fd"};
const _title = {
    width: '33%',
    flexShrink: 0,
    color: '#1976d2'
};
const _subtitle = {color: 'text.secondary'};


const InfoBlock = (props) => {
    const {id, title, subtitle, info, expanded, onChange} = props;


    return (
        <Accordion
            expanded={expanded === id}
            elevation={3}
            onChange={onChange(id)}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                sx={_summary}
            >
                <Typography sx={_title}>
                    {title}
                </Typography>
                <Typography sx={_subtitle}>
                    {subtitle}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {info}
            </AccordionDetails>
        </Accordion>
    );
};

export default InfoBlock;