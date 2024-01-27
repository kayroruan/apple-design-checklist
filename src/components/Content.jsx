import React from "react";
import './Content.css';
import { Routes, Route } from 'react-router-dom';

import Home from "../views/examples/Home";
import Pag1 from "../views/examples/Pag1";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Pag1" element={<Pag1 />}></Route>
        </Routes>
    </main>
)

export default Content