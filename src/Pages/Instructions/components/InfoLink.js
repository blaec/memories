import React from 'react';


const InfoLink = (props) => {
    const {link, text} = props;


    return (
        <a href={link}
           rel="noreferrer"
           target="_blank">
            {text}
        </a>
    );
};

export default InfoLink;