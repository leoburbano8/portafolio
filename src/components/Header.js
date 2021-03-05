import React from 'react';
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Desarrollo Web</h1>
                <Typed
                    className="typed-text"
                    strings={["Diseño Web", "Desarrollo Web", "Facebook Ads", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main">Contáctanos</a>
            </div>
        </div>
    )
}

export default Header
