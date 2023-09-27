import React from 'react';

import {Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";


const TextBlock = (props) => {
    const {header, text, link} = props;


    return (
        <Grid item xs={12} md={6}>
            <Card elevation={3}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {header}
                        </Typography>
                        {text.map((paragraph) =>
                            <Typography variant="body2" color="text.secondary">
                                {paragraph}
                            </Typography>)
                        }
                        {link ? <a href={link} target="_blank">Как создавать и редактировать фотоальбомы</a> : null}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default TextBlock;