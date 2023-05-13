import React from 'react';
import {pageAction} from "../reducers/pageReducer";
import {useDispatch, useSelector} from "react-redux";

const ButtonYouTube = () => {
    const isClicked = useSelector(state => state.page.pageName)
    const dispatch = useDispatch();
    const editPageSubsYouTube = () => dispatch(pageAction('subscribersYouTube'))
    const editPageLikesYouTube = () => dispatch(pageAction('likesYouTube'))
    const editPageViewsYouTube = () => dispatch(pageAction('viewsYouTube'))

    return (
        <div className={'container-shop-buttons'}>
            <button className={isClicked === "subscribersYouTube"?'shop-button active-youtube':'shop-button'} onClick={editPageSubsYouTube}>Подписчики</button>
            <button className={isClicked === "likesYouTube"?'shop-button active-youtube':'shop-button'} onClick={editPageLikesYouTube}>Лайки</button>
            <button className={isClicked === "viewsYouTube"?'shop-button active-youtube':'shop-button'} onClick={editPageViewsYouTube}>Просмотры</button>
        </div>
    );
};

export default ButtonYouTube;