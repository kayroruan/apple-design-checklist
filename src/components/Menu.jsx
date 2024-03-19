import React from "react";
import './Menu.css'

import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'

import seta from '../assets/images/seta.svg'

const Menu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const location = useLocation();

    const isRouteActive = (route) => {
        return location.pathname === route;
    };

    const isSubRouteActive = (routes) => {
        return routes.some(route => location.pathname.startsWith(route));
    };

    return (
        <div>
            <div className="Menu">
                <section>
                    <Link to="/"><h2>Apple Design Checklist</h2></Link>
                </section>
                <section className="MenuNav">
                    <p>
                        <Link to="/regras-de-loja" className={isRouteActive('/regras-de-loja') ? "activeLink" : ""}>
                            Regras da Loja
                        </Link>
                    </p>
                    <p>
                        <Link to="/regras-gerais-de-UI" className={isRouteActive('/regras-gerais-de-UI') ? "activeLink" : ""}>
                            Regras de UI
                        </Link>
                    </p>
                    <p><button onClick={toggleSubMenu} 
                    className={isSubRouteActive(['/Plataformas', '/iOS', '/tvOS']) ? "activeLink" : ""}>Plataformas<img src={seta} alt="" style={{ height: '10px' }} /></button></p>
                </section>

            </div>
            {showSubMenu && (
                <div className="SubMenu">
                    <p><Link to='/iOS' className={isRouteActive('/iOS') ? "activeLink" : ""}>iOS</Link></p>
                    <p><Link to='/tvOS' className={isRouteActive('/tvOS') ? "activeLink" : ""}>tvOS</Link></p>
                </div>
            )}
        </div>

    )
}

export default Menu