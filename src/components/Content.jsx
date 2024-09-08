import React, { useEffect } from "react";
import './Content.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Menu from "./Menu";
import Home from "../views/examples/Home";
import RegUi from "../views/examples/RegUi";
import RegShop from "../views/examples/RegShop";
import Acessibility from "../views/examples/Acessibility"
import Ios from "../views/examples/Ios";
import TvOs from "../views/examples/TvOs";


function Content() {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main className="Content">
            {!isHomePage && <Menu />}

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/regras-gerais-de-UI" element={<RegUi />}></Route>
                <Route path="/regras-de-loja" element={<RegShop />}></Route>
                <Route path="/acessibilidade" element={<Acessibility />}></Route>
                <Route path="/iOS" element={<Ios />}></Route>
                <Route path="/tvOS" element={<TvOs />}></Route>
            </Routes>
        </main>
    )
}

export default Content