import React from 'react';
import {Box} from "@mui/material";

const InfoImage = (props) => {
    const {path} = props;


    return (
        <Box>
            <img
                src={path}
                alt=""
                width="330px"
            />
        </Box>
    );
};

export default InfoImage;