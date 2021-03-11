import React from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <Link smooth={true} to='home' offset={-110} className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#FFF"}}/>
                    </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to='home' offset={-110} className="nav-link" >Inicio<span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                             <Link smooth={true} to='acerca' offset={-110} className="nav-link" >Acerca de mi</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='servicio' offset={-110} className="nav-link" >Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='portafolio' offset={-110}  className="nav-link" >Portafolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='contacto' offset={-110}  className="nav-link" >Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
