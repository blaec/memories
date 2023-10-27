import React from 'react';

import {cardType} from "../../Utils/Constants";

import {Box} from "@mui/material";


const _playButton = {
    position: 'absolute',
    width: '70px',
    height: '50px',
    left: '50%',
    top: '50%',
    marginLeft: '-35px', /*half of the width */
    marginTop: '-25px', /*half of the height */
};
const _container = {
    position: 'relative'
};
const _hidden = {
    display: 'none',
};


const LinkedImage = (props) => {
    const {type, link, image, title, width, height} = props;

    const youtubeRootStyle = type === cardType.youtubeManual
        ? _container
        : null;
    const youtubeButtonStyle = type === cardType.youtubeManual
        ? _playButton
        : _hidden;
    const errImage = `https://via.placeholder.com/${width}x${height}.png?text=${title}`;
    const _imageStyle = {
        width: width,
        height: height,
        objectFit: 'cover'
    };


    return (
        <Box sx={youtubeRootStyle}>
            <a href={link}
               target="_blank"
               rel="noreferrer"
            >
                <img
                    src={image}
                    alt=""
                    style={_imageStyle}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = {errImage}
                    }}
                />
                <img
                    src="/images/yt_playbutton.png"
                    alt=""
                    style={youtubeButtonStyle}
                />
            </a>
        </Box>
    );
};

export default LinkedImage;