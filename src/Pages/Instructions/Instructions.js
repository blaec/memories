import React from 'react';

import {Box, Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const _title = {
    width: '33%',
    flexShrink: 0,
    color: '#1976d2'
};
const _subtitle = {color: 'text.secondary'};


const Instructions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{p: 2}}>
            <Accordion
                expanded={expanded === 'panel1'}
                elevation={3}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: "#e3f2fd"}}>
                    <Typography sx={_title}>Общая информация</Typography>
                    <Typography sx={_subtitle}>Что есть на сайте?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Сайт содержит альбомы (которые можно просмотреть только вне сайта)
                        и видео-ролики (которые можно просмотреть как на самом сайте так и вне его).
                    </Typography>
                    <Typography>
                        Перемещаться по сайту можно с помощью меню слева выполнив щелчек по желаемому пункту меню.
                        Некоторые пункты меню не открывают новой страницы, а содержат подпункты.
                    </Typography>
                    <Typography>
                        Если сайт просматривается на телефоне - то меню можно открыть выполнив щелчок в вернем левом
                        углу на значке меню.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                elevation={3}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: "#e3f2fd"}}>
                    <Typography sx={_title}>Фотоальбом</Typography>
                    <Typography sx={_subtitle}>Как просмотреть альбом google?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Карточка альбома содержит заглавную фотографию, заголовок и краткое описание.
                    </Typography>
                    <Typography>
                        Иногда описание альбома содержит больше текста, чем он может вместиться на карточке -
                        для просмотра всего описания нужно щелкнуть один раз по описанию.
                        Чтобы вернуться к предыдущему размеру карточки - щелкуть по описанию ещё один раз.
                    </Typography>
                    <Typography>
                        Для начала просмотра альбома - выполнить щелчок по заглавной фотографии -
                        при этом альбом откроется в новом окне (вне сайта) в приложении альбомы google.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                elevation={3}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: "#e3f2fd"}}>
                    <Typography sx={_title}>Видеоролик</Typography>
                    <Typography sx={_subtitle}>Как просматривать видеоролик youtube?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Видеоролики (youtube) содержат в центре фотографии значок для воспроизведения,
                        так же как и альбомы под видео располагается заголовок и краткое описание.
                    </Typography>
                    <Typography>
                        Если щелкнуть по значку воспроизведения - можно начать просмотр в маленьком окне,
                        двойной щелчок по видео или одинарный щелчок по значку полного экрана внизу справа -
                        откроет ролик на весь экран на этом сайте.
                    </Typography>
                    <Typography>
                        Для того, чтобы открыть ролик вне сайта - нужно щелкнуть по заголовку ролика как это показано ниже.
                    </Typography>
                    <img src="/images/open_video_outside_the_site.png" alt="" width='330px'/>
                    <Typography>
                        Как и с альбомом - для просмотра длинного описания - нужно щелкнуть по нему один раз.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                elevation={3}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: "#e3f2fd"}}>
                    <Typography sx={_title}>Новый фотоальбом</Typography>
                    <Typography sx={_subtitle}>Как добавить новый альбом на сайт?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Все альбомы используемые на этом сайте - созданы в приложении альбомы google.
                    </Typography>
                    <Typography>
                        Здесь можно ознакомиться с подробной инструкцией как создать альбом:
                    </Typography>
                    <a
                        href="https://support.google.com/photos/answer/6128849?hl=ru&co=GENIE.Platform%3DAndroid&oco=0"
                        rel="noreferrer"
                        target="_blank">
                        Как создавать и редактировать фотоальбомы
                    </a>
                    <Typography>
                        После создания альбома - нужно открыть к нему доступ и поделиться ссылкой на него.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel5'}
                elevation={3}
                onChange={handleChange('panel5')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{backgroundColor: "#e3f2fd"}}>
                    <Typography sx={_title}>Новый видеоролик</Typography>
                    <Typography sx={_subtitle}>Как добавить новый видеоролик на сайт?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Все видеоролики используемые на этом сайте - созданы на сервисе youtube.
                    </Typography>
                    <Typography>
                        Здесь можно ознакомиться с подробной инструкцией как создать видеоролик:
                    </Typography>
                    <a
                        href="https://support.google.com/youtube/answer/57407?hl=ru&co=GENIE.Platform%3DDesktop"
                        rel="noreferrer"
                        target="_blank">
                        Как загружать видео на YouTube
                    </a>
                    <Typography>
                        После создания альбома - нужно открыть к нему доступ и поделиться ссылкой на него.
                    </Typography>
                    <Box>
                        <img src="/images/share_youtube.png" alt="" width='330px'/>
                    </Box>
                    <Box>
                        <img src="/images/embed_youtube.png" alt="" width='330px'/>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Instructions;