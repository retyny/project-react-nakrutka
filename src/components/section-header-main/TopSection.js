import React from 'react';
import MainSectionLeft from "./MainSectionLeft";
import MainSectionShadow from "./MainSectionShadow";
import MainSectionRight from "./MainSectionRight";

const TopSection = () => {
    return (
        <div className={'main-section'}>
            <MainSectionShadow/>
            <MainSectionLeft/>
            <MainSectionRight/>
        </div>
    );
};

export default TopSection;