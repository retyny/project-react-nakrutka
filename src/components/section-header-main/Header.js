import React from 'react';

const Header = () => {
    return (
        <div className={'header'}>
            <nav className={'header-inner'}>
                <a href="src/components/section-header-main/Header#" className="header-brand">instagir.il</a>
                <div className="nav-btns">
                    <a href="src/components/section-header-main/Header#" className="nav-btn">Контакты</a>
                    <a href="src/components/section-header-main/Header#" className="nav-btn">Услуги</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;