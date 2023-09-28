import React from 'react';

import InfoBlock from "./components/InfoBlock";

import {Box, Typography} from "@mui/material";

const _root = {p: 2};
const imgWidth = '330px';


const Instructions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const generalInfo = (
        <>
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
        </>
    );
    const album = (
        <>
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
        </>
    );
    const video = (
        <>
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
                Для того, чтобы открыть ролик вне сайта - нужно щелкнуть по заголовку ролика как это показано
                ниже.
            </Typography>
            <img src="/images/open_video_outside_the_site.png" alt="" width={imgWidth}/>
            <Typography>
                Как и с альбомом - для просмотра длинного описания - нужно щелкнуть по нему один раз.
            </Typography>
        </>
    );
    const newAlbum = (
        <>
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
        </>
    );
    const newVideo = (
        <>
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
                <img src="/images/share_youtube.png" alt="" width={imgWidth}/>
            </Box>
            <Box>
                <img src="/images/embed_youtube.png" alt="" width={imgWidth}/>
            </Box>
        </>
    );


    return (
        <Box sx={_root}>
            <InfoBlock
                id="panel1"
                title="Общая информация"
                subtitle="Что есть на сайте?"
                info={generalInfo}
                expanded={expanded}
                onChange={handleChange}
            />
            <InfoBlock
                id="panel2"
                title="Фотоальбом"
                subtitle="Как просмотреть альбом google?"
                info={album}
                expanded={expanded}
                onChange={handleChange}
            />
            <InfoBlock
                id="panel3"
                title="Видеоролик"
                subtitle="Как просматривать видеоролик youtube?"
                info={video}
                expanded={expanded}
                onChange={handleChange}
            />
            <InfoBlock
                id="panel4"
                title="Новый фотоальбом"
                subtitle="Как добавить новый альбом на сайт?"
                info={newAlbum}
                expanded={expanded}
                onChange={handleChange}
            />
            <InfoBlock
                id="panel5"
                title="Новый видеоролик"
                subtitle="Как добавить новый видеоролик на сайт?"
                info={newVideo}
                expanded={expanded}
                onChange={handleChange}
            />
        </Box>
    );
};

export default Instructions;