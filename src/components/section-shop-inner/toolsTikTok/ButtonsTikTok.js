import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pageAction} from "../reducers/pageReducer";

const ButtonsTikTok = () => {
    const isClicked = useSelector(state => state.page.pageName)
    const dispatch = useDispatch();
    const editPageSubsTikTok = () => dispatch(pageAction('subscribersTikTok'))
    const editPageLikesTikTok = () => dispatch(pageAction('likesTikTok'))
    const editPageViewsTikTok = () => dispatch(pageAction('viewsTikTok'))

    return (
        <div className={'container-shop-buttons'}>
            <button className={isClicked === "subscribersTikTok"?'shop-button active-tiktok':'shop-button'} onClick={editPageSubsTikTok}>Подписчики</button>
            <button className={isClicked === "likesTikTok"?'shop-button active-tiktok':'shop-button'} onClick={editPageLikesTikTok}>Лайки</button>
            <button className={isClicked === "viewsTikTok"?'shop-button active-tiktok':'shop-button'} onClick={editPageViewsTikTok}>Просмотры</button>
        </div>
    );
};

export default ButtonsTikTok;