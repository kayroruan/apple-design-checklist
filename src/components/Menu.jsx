import React from "react";
import './Menu.css';
import Coming from './Coming/Coming.jsx'

import { useState } from "react";
import { Link, useLocation } from 'react-router-dom'

import seta from '../assets/images/seta.svg'

const Menu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const closeSubMenu = () => {
        setShowSubMenu(false);
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
                            Regras de gerais UI
                        </Link>
                    </p>
                    <p><button onClick={toggleSubMenu} 
                    className={isSubRouteActive(['/Plataformas', '/iOS', '/tvOS']) ? "activeLink" : ""}>Plataformas<img src={seta} alt="" style={{ height: '10px' }} /></button></p>
                </section>
                <section className="MenuNavMob">
                    <button>a</button>
                    <div></div>
                </section>

            </div>
            {showSubMenu && (
                <div className="SubMenu">
                    <p><Link to='/iOS' onClick={closeSubMenu} className={isRouteActive('/iOS') ? "activeLink" : ""}>iOS</Link></p>
                    <p><Link to='/iOS'>macOS</Link><Coming tamanho="pequeno"></Coming></p>
                    <p><Link to='/iOS'>iPadOS</Link><Coming tamanho="pequeno"></Coming></p>
                    <p><Link to='/iOS'>watchOS</Link><Coming tamanho="pequeno"></Coming></p>
                    <p><Link to='/tvOS' onClick={closeSubMenu} className={isRouteActive('/tvOS') ? "activeLink" : ""}>tvOS</Link></p>
                </div>
            )}
        </div>

    )
}

export default Menu