import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pageAction} from "./reducers/pageReducer";

const Services = () => {

    const icon = useSelector(state => state.page.pageIcon)

    const dispatch = useDispatch();
    const editPageSubsInstagram = () => dispatch(pageAction('subscribesInstagram'))
    const editPageLikesInstagram = () => dispatch(pageAction('likesInstagram'))
    const editPageViewsInstagram = () => dispatch(pageAction('viewsInstagram'))

    const editPageSubsTelegram = () => dispatch(pageAction('subscribersTelegram'))
    const editPageViewsTelegram = () => dispatch(pageAction('viewsTelegram'))

    const editPageSubsTikTok = () => dispatch(pageAction('subscribesTikTok'))
    const editPageLikesTikTok = () => dispatch(pageAction('likesTikTok'))
    const editPageViewsTikTok = () => dispatch(pageAction('viewsTikTok'))

    const editPageSubsYouTube = () => dispatch(pageAction('subscribersYouTube'))
    const editPageLikesYouTube = () => dispatch(pageAction('likesYouTube'))
    const editPageViewsYouTube = () => dispatch(pageAction('viewsYouTube'))


    switch(icon){
        case 'YouTube':
            return (
                <div className={'container-shop-buttons'}>
                    <button className={'shop-button'} onClick={editPageSubsYouTube}>Подписчики</button>
                    <button className={'shop-button'} onClick={editPageLikesYouTube}>Лайки</button>
                    <button className={'shop-button'} onClick={editPageViewsYouTube}>Просмотры</button>
                </div>
            );
        case 'TikTok':
            return (
                <div className={'container-shop-buttons'}>
                    <button className={'shop-button'} onClick={editPageSubsTikTok}>Подписчики</button>
                    <button className={'shop-button'} onClick={editPageLikesTikTok}>Лайки</button>
                    <button className={'shop-button'} onClick={editPageViewsTikTok}>Просмотры</button>
                </div>
            );
        case 'Telegram':
            return (
                <div className={'container-shop-buttons'}>
                    <button className={'shop-button'} onClick={editPageSubsTelegram}>Подписчики</button>
                    <button className={'shop-button'} onClick={editPageViewsTelegram}>Просмотры</button>
                </div>
            );
        default:
            return (
                <div className={'container-shop-buttons'}>
                    <button className={'shop-button'} onClick={editPageSubsInstagram}>Подписчики</button>
                    <button className={'shop-button'} onClick={editPageLikesInstagram}>Лайки</button>
                    <button className={'shop-button'} onClick={editPageViewsInstagram}>Просмотры</button>
                </div>
            );

    }

};

export default Services;