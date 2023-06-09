import React from 'react';
import {subscribesPricesProductsDiscountInstagram} from "../../constant";

const SubscribersInstagramServices = () => {
    return (
        <div className={'shop-cards-wrapper'}>
            {
                subscribesPricesProductsDiscountInstagram.map((card) =>
                    <div className={'shop-card'}>
                        <h2 className={'card-variables card-child-1'}>{card.quantity}</h2>
                        <h4 className={'card-variables'}>{card.subscribes}</h4>
                        <h5 className={'card-variables'}>(Без списания)</h5>
                        <div className="create-line"></div>
                        <h2 className={'card-variables old-price'}>{card.oldPrice} ₪</h2>
                        <h3 className={'card-variables'}>{card.newPrice} ₪</h3>
                        <button className={'btn-color-instagram'}>Заказать</button>
                    </div>
                )
            }
        </div>
    );
};

export default SubscribersInstagramServices;