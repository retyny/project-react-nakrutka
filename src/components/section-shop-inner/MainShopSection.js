import React from 'react';
import IconsShop from "./IconsShop";
import Shop from "./Shop";
import Services from "./Services";
import Cards from "./Cards";

const MainShopSection = () => {
    return (
            <div>
                <Shop/>
                <IconsShop/>
                <Services/>
                <Cards/>
            </div>
    );
};

export default MainShopSection;