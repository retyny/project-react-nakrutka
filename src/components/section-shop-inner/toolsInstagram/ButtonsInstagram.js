import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {pageAction} from "../reducers/pageReducer";

const ButtonsInstagram = () => {
    const isClicked = useSelector(state => state.page.pageName)
    const dispatch = useDispatch();
    const editPageSubsInstagram = () => dispatch(pageAction('subscribersInstagram'))
    const editPageLikesInstagram = () => dispatch(pageAction('likesInstagram'))
    const editPageViewsInstagram = () => dispatch(pageAction('viewsInstagram'))

    return (
        <div className={'container-shop-buttons'}>
            <button className={isClicked === "subscribersInstagram"?'shop-button active-instagram':'shop-button'} onClick={editPageSubsInstagram}>Подписчики</button>
            <button className={isClicked === "likesInstagram"?'shop-button active-instagram':'shop-button'} onClick={editPageLikesInstagram}>Лайки</button>
            <button className={isClicked === "viewsInstagram"?'shop-button active-instagram':'shop-button'} onClick={editPageViewsInstagram}>Просмотры</button>
        </div>
    );
};

export default ButtonsInstagram;