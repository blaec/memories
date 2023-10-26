import React from 'react';

const Iframe = (props) => {
    const {title, width, height, link} = props;

    return (
        <iframe
            title={title}
            width={width}
            height={height}
            src={link}
            allowFullScreen>
        </iframe>
    );
};

export default Iframe;