import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div id='home' className="header-wraper">
            <div className="main-info">
                <h1>Desarrollo Web</h1>
                <Typed
                    className="typed-text"
                    strings={["Diseño Web", "Desarrollo Web", "Facebook Ads", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to='contacto' offset={-110}  className="btn-main">Contacto</Link>
            </div>
        </div>
    )
}

export default Header
