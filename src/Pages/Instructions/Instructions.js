import React from 'react';

import InfoBlock from "./components/InfoBlock";
import InfoImage from "./components/InfoImage";
import InfoLink from "./components/InfoLink";

import {Box, Typography} from "@mui/material";

const _root = {p: 2};

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
        <InfoImage path="/images/menu.png"/>
        <Typography>
            Если сайт просматривается на телефоне - то меню будет скрыто иего можно открыть выполнив щелчок в вернем левом
            углу по значку меню.
        </Typography>
        <InfoImage path="/images/phone_menu.png"/>
        <Typography>
            Альбомы и видео на сайте расположены в обратном хронологическом порядке, т.е. самые посление
            находятся в самом начале страницы.
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
        <InfoImage path="/images/open_video_outside_the_site.png"/>
        <Typography>
            К сожалению, не все видеоролики можно добавить на сайт вышеописанным образом из-за музыки,
            поэтому часть видеороликов внешне похожи на youtube-ролики - но это фотография с ссылкой на ролик.
            Такой видеоролик нельзя просматривать на сайте, при щелчке на нем - видеоролик откроется в отдельном окне
            и там уже можно будет его просмотреть.
        </Typography>
        <Typography>
            Внешне такой видеоролик немного отличается - на нем отсутствует заголовок ролика и цвет кнопки заметно темнее.
        </Typography>
        <InfoImage path="/images/youtube_simulation.png"/>
        <Typography>
            Как и с альбомом - для просмотра длинного описания к видеоролику - нужно щелкнуть по описанию один раз.
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
        <InfoLink
            link="https://support.google.com/photos/answer/6128849?hl=ru&co=GENIE.Platform%3DAndroid&oco=0"
            text="Как создавать и редактировать фотоальбомы"
        />
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
        <InfoLink
            link="https://support.google.com/youtube/answer/57407?hl=ru&co=GENIE.Platform%3DDesktop"
            text="Как загружать видео на YouTube"
        />
        <Typography>
            После создания альбома - нужно открыть к нему доступ и поделиться ссылкой на него.
        </Typography>
        <InfoImage path="/images/share_youtube.png"/>
        <InfoImage path="/images/embed_youtube.png"/>
        <Typography>
            Если видеоролик содержит музыку, то скорее всего что вышеописанный способ не подойдет,
            поэтому нужна будет ссылка на сам ролик:
        </Typography>
        <InfoImage path="/images/share_non_ebedded_youtube.png"/>
    </>
);


const Instructions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


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