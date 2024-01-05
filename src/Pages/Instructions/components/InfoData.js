import React from "react";

import InfoImage from "./InfoImage";
import InfoLink from "./InfoLink";

import {Typography} from "@mui/material";


const InstructionContent = ({content}) => (
    <>
        {content.map((item, index) => (
            <React.Fragment key={index}>
                {item.type === "text" && (<Typography key={index}>{item.text}</Typography>)}
                {item.type === "image" && <InfoImage key={index} path={item.path}/>}
                {item.type === "link" && <InfoLink key={index} link={item.link} text={item.text}/>}
            </React.Fragment>
        ))}
    </>
);

export const instructionsData = [
    {
        id: "panel1",
        title: "Общая информация",
        subtitle: "Что есть на сайте?",
        info: (
            <InstructionContent
                content={[
                    {
                        type: "text",
                        text: "Сайт содержит альбомы (которые можно просмотреть только вне сайта) и видео-ролики " +
                            "(которые можно просмотреть как на самом сайте так и вне его)."
                    },
                    {
                        type: "text",
                        text: "Перемещаться по сайту можно с помощью меню слева выполнив щелчек по желаемому пункту меню. " +
                            "Некоторые пункты меню не открывают новой страницы, а содержат подпункты."
                    },
                    {
                        type: "text",
                        text: "Если сайт просматривается на телефоне - то меню будет скрыто и его можно открыть " +
                            "выполнив щелчок в вернем левом углу по значку меню."
                    },
                    {
                        type: "image",
                        path: "/images/phone_menu.png"
                    },
                    {
                        type: "text",
                        text: "Альбомы и видео на сайте расположены в обратном хронологическом порядке, " +
                            "т.е. самые посление находятся в самом начале страницы."
                    },
                ]}
            />
        )
    },
    {
        id: "panel2",
        title: "Фотоальбом",
        subtitle: "Как просмотреть альбом google?",
        info: (
            <InstructionContent
                content={[
                    {
                        type: "text",
                        text: "Карточка альбома содержит заголовок (со словом альбом), заглавную фотографию, " +
                            "название альбома и краткое описание содержимого."
                    },
                    {
                        type: "text",
                        text: "Иногда описание альбома содержит больше текста, чем он может вместиться " +
                            "на карточке - для просмотра всего описания нужно щелкнуть один раз по описанию. " +
                            "Чтобы вернуться к предыдущему размеру карточки - щелкуть по описанию ещё один раз."
                    },
                    {
                        type: "text",
                        text: "Для начала просмотра альбома - выполнить щелчок по заглавной фотографии - " +
                            "при этом альбом откроется в новом окне (вне сайта) в приложении альбомы google."
                    },
                ]}
            />
        )
    },
    {
        id: "panel3",
        title: "Видеоролик",
        subtitle: "Как просматривать видеоролик youtube?",
        info: (
            <InstructionContent
                content={[
                    {
                        type: "text",
                        text: "Видеоролики (youtube) содержат в заголовке слово 'видео', в центре фотографии значок для воспроизведения, " +
                            "так же как и альбомы под видео располагается навание видео и краткое описание."
                    },
                    {
                        type: "text",
                        text: "Если щелкнуть по значку воспроизведения - можно начать просмотр в маленьком окне, " +
                            "двойной щелчок по видео или одинарный щелчок по значку полного экрана внизу справа - " +
                            "откроет ролик на весь экран на этом сайте."
                    },
                    {
                        type: "text",
                        text: "Для того, чтобы открыть ролик вне сайта - нужно щелкнуть по заголовку ролика как это показано ниже."
                    },
                    {
                        type: "image",
                        path: "/images/open_video_outside_the_site.png"
                    },
                    {
                        type: "text",
                        text: "К сожалению, не все видеоролики можно добавить на сайт вышеописанным образом из-за авторских прав на музыку, " +
                            "поэтому часть видеороликов внешне похожи на youtube-ролики - но это фотография с ссылкой на ролик. " +
                            "Такой видеоролик нельзя просматривать на сайте, при щелчке на нем - видеоролик откроется " +
                            "в отдельном окне и там уже можно будет его просмотреть."
                    },
                    {
                        type: "text",
                        text: "Внешне такой видеоролик немного отличается - на нем отсутствует заголовок ролика и цвет кнопки заметно темнее."
                    },
                    {
                        type: "image",
                        path: "/images/youtube_simulation.png"
                    },
                    {
                        type: "text",
                        text: "Как и с альбомом - для просмотра длинного описания к видеоролику - нужно щелкнуть по описанию один раз."
                    },
                ]}
            />
        )
    },
    {
        id: "panel4",
        title: "Новый фотоальбом",
        subtitle: "Как добавить новый альбом на сайт?",
        info: (
            <InstructionContent
                content={[
                    {
                        type: "text",
                        text: "Все альбомы используемые на этом сайте - созданы в приложении альбомы google."
                    },
                    {
                        type: "text",
                        text: "Здесь можно ознакомиться с подробной инструкцией как создать альбом:"
                    },
                    {
                        type: "link",
                        link: "https://support.google.com/photos/answer/6128849?hl=ru&co=GENIE.Platform%3DAndroid&oco=0",
                        text: "Как создавать и редактировать фотоальбом"
                    },
                    {
                        type: "text",
                        text: "После создания альбома - нужно открыть к нему доступ и поделиться ссылкой на него."
                    },
                ]}
            />
        )
    },
    {
        id: "panel5",
        title: "Новый видеоролик",
        subtitle: "Как добавить новый видеоролик на сайт?",
        info: (
            <InstructionContent
                content={[
                    {
                        type: "text",
                        text: "Все видеоролики используемые на этом сайте - созданы на сервисе youtube."
                    },
                    {
                        type: "text",
                        text: "Здесь можно ознакомиться с подробной инструкцией как создать видеоролик:"
                    },
                    {
                        type: "link",
                        link: "https://support.google.com/youtube/answer/57407?hl=ru&co=GENIE.Platform%3DDesktop",
                        text: "Как загружать видео на YouTube"
                    },
                    {
                        type: "text",
                        text: "После создания альбома - нужно открыть к нему доступ и поделиться ссылкой на него."
                    },
                    {
                        type: "image",
                        path: "/images/share_youtube.png"
                    },
                    {
                        type: "image",
                        path: "/images/embed_youtube.png"
                    },
                    {
                        type: "text",
                        text: "Если видеоролик содержит музыку, то скорее всего что вышеописанный способ не подойдет, " +
                            "поэтому нужна будет ссылка на сам ролик:"
                    },
                    {
                        type: "image",
                        path: "/images/share_non_ebedded_youtube.png"
                    },
                ]}
            />
        )
    }
];
