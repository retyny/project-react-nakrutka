import React from 'react';
import {viewsPricesProductsDiscountYouTube} from "../../constant";

const ViewsYouTubeServices = () => {
    return (
        <div className={'shop-cards-wrapper'}>
            {
                viewsPricesProductsDiscountYouTube.map((card) =>
                    <div className={'shop-card'}>
                        <h2 className={'card-variables card-child-1'}>{card.quantity}</h2>
                        <h4 className={'card-variables'}>{card.views}</h4>
                        <h5 className={'card-variables'}>(Без списания)</h5>
                        <div className="create-line"></div>
                        <h2 className={'card-variables old-price'}>{card.oldPrice} ₪</h2>
                        <h3 className={'card-variables'}>{card.newPrice} ₪</h3>
                        <button className={'btn-color-youtube'}>Заказать</button>
                    </div>)
            }
        </div>
    );
};

export default ViewsYouTubeServices;