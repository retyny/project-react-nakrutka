import React from 'react';
import instagramImg from '../../img/instagram.png';
import telegramImg from '../../img/telegram1.png';
import tikTokImg from '../../img/tik_tok2.png';
import youTubeImg from '../../img/youtube2.png';

const IconsShop = () => {
    return (
        <div className={'container-shop-icons'}>
            <img className={'shop-icons'} src={instagramImg}/>
            <img className={'shop-icons'} src={telegramImg}/>
            <img className={'shop-icons'} src={tikTokImg}/>
            <img className={'shop-icons'} src={youTubeImg}/>
        </div>
    );
};

export default IconsShop;