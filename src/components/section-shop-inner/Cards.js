import React from 'react';
import {useSelector} from "react-redux";
import SubscribersInstagramServices from "./toolsInstagram/SubscribersInstagramServices";
import ViewsInstagramServices from "./toolsInstagram/ViewsInstagramServices";
import LikesInstagramServices from "./toolsInstagram/LikesInstagramServices";
import SubscribersTelegramServices from "./toolsTelegram/SubscribersTelegramServices";
import ViewsTelegramServices from "./toolsTelegram/ViewsTelegramServices";
import SubscribersTikTokServices from "./toolsTikTok/SubscribersTikTokServices";
import ViewsTikTokServices from "./toolsTikTok/ViewsTikTokServices";
import LikesTikTokServices from "./toolsTikTok/LikesTikTokServices";
import SubscribersYouTubeServices from "./toolsYouTube/SubscribersYouTubeServices";
import LikesYouTubeServices from "./toolsYouTube/LikesYouTubeServices";
import ViewsYouTubeServices from "./toolsYouTube/ViewsYouTubeServices";

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
