import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pageAction} from "./reducers/pageReducer";
import ButtonsYouTube from "./toolsYouTube/ButtonsYouTube";
import ButtonsTikTok from "./toolsTikTok/ButtonsTikTok";
import ButtonsTelegram from "./toolsTelegram/ButtonsTelegram";
import ButtonsInstagram from "./toolsInstagram/ButtonsInstagram";

const Services = () => {
    const icon = useSelector(state => state.page.pageIcon)
    switch(icon){
        case 'YouTube':
            return <ButtonsYouTube/>;
        case 'TikTok':
            return <ButtonsTikTok/>;
        case 'Telegram':
            return <ButtonsTelegram/>;
        default:
            return <ButtonsInstagram/>;
    }
};

export default Services;