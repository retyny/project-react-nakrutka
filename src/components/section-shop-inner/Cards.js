import React from 'react';
import {useSelector} from "react-redux";
import SubscribersInstagramServices from "./servicesInstagram/SubscribersInstagramServices";
import ViewsInstagramServices from "./servicesInstagram/ViewsInstagramServices";
import LikesInstagramServices from "./servicesInstagram/LikesInstagramServices";
import SubscribersTelegramServices from "./servicesTelegram/SubscribersTelegramServices";
import ViewsTelegramServices from "./servicesTelegram/ViewsTelegramServices";
import SubscribersTikTokServices from "./servicesTikTok/SubscribersTikTokServices";
import ViewsTikTokServices from "./servicesTikTok/ViewsTikTokServices";
import LikesTikTokServices from "./servicesTikTok/LikesTikTokServices";
import SubscribersYouTubeServices from "./servicesYouTube/SubscribersYouTubeServices";
import LikesYouTubeServices from "./servicesYouTube/LikesYouTubeServices";
import ViewsYouTubeServices from "./servicesYouTube/ViewsYouTubeServices";

const Cards = () => {

    const page = useSelector(state => state.page.pageName);
    const icon = useSelector(state => state.page.pageIcon);

    if(icon === 'Instagram')
        switch (page){
            case "subscribesInstagram":
                return <SubscribersInstagramServices/>;
            case "likesInstagram":
                return <LikesInstagramServices/>;
            case "viewsInstagram":
                return <ViewsInstagramServices/>;
            default:
                return <SubscribersInstagramServices/>;
        }
    else if (icon === 'Telegram')
        switch (page) {
            case "subscribersTelegram":
                return <SubscribersTelegramServices/>
            case "viewsTelegram":
                return <ViewsTelegramServices/>
            default:
                return <SubscribersTelegramServices/>;
        }
    else if (icon === 'TikTok')
        switch (page) {
            case "subscribersTikTok":
                return <SubscribersTikTokServices/>
            case "likesTikTok":
                return <LikesTikTokServices/>;
            case "viewsTikTok":
                return <ViewsTikTokServices/>
            default:
                return <SubscribersTikTokServices/>;
        }
    else if (icon === 'YouTube')
        switch (page) {
            case "subscribersYouTube":
                return <SubscribersYouTubeServices/>
            case "likesYouTube":
                return <LikesYouTubeServices/>;
            case "viewsYouTube":
                return <ViewsYouTubeServices/>
            default:
                return <SubscribersTikTokServices/>;
        }
};

export default Cards;
