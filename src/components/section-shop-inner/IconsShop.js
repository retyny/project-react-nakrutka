import React from 'react';
import instagramImg from '../../img/instagram.png';
import telegramImg from '../../img/telegram1.png';
import tikTokImg from '../../img/tik_tok2.png';
import youTubeImg from '../../img/youtube2.png';
import {useDispatch} from "react-redux";
import {pageIconAction} from "./reducers/pageReducer";

const IconsShop = () => {

    const dispatch = useDispatch();
    const editInstagram = () => dispatch(pageIconAction('Instagram'))
    const editTelegram = () => dispatch(pageIconAction('Telegram'))
    const editTikTok = () => dispatch(pageIconAction('TikTok'))
    const editYouTube = () => dispatch(pageIconAction('YouTube'))

    return (
        <div className={'container-shop-icons'}>
            <img className={'shop-icons'} onClick={editInstagram} src={instagramImg}/>
            <img className={'shop-icons'} onClick={editTelegram} src={telegramImg}/>
            <img className={'shop-icons'} onClick={editTikTok} src={tikTokImg}/>
            <img className={'shop-icons'} onClick={editYouTube} src={youTubeImg}/>
        </div>
    );
};

export default IconsShop;