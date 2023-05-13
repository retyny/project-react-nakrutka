import React from 'react';
import {pageAction} from "../reducers/pageReducer";
import {useDispatch, useSelector} from "react-redux";

const ButtonsTelegram = () => {
    const isClicked = useSelector(state => state.page.pageName)
    const dispatch = useDispatch();
    const editPageSubsTelegram = () => dispatch(pageAction('subscribersTelegram'))
    const editPageViewsTelegram = () => dispatch(pageAction('viewsTelegram'))

    return (
        <div className={'container-shop-buttons'}>
            <button className={isClicked === "subscribersTelegram"?'shop-button active-telegram':'shop-button'} onClick={editPageSubsTelegram}>Подписчики</button>
            <button className={isClicked === "viewsTelegram"?'shop-button active-telegram':'shop-button'} onClick={editPageViewsTelegram}>Просмотры</button>
        </div>
    );
};

export default ButtonsTelegram;