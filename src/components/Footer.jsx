import React from "react";
import './Footer.css';

import LinkedIn from '../assets/images/linkedin.svg';
import Medium from '../assets/images/medium.svg';


const Footer = props => (
    <div className="Footer">
        <h2>Apple Design Checklist</h2>
        <div className="part">
            <section>
                <p>Letícia Pinheiro (UX Designer)</p>
                <a href=""><img src={LinkedIn}/></a><a href=""><img src={Medium}/></a>
            </section>
            <section>
                <p>Ruan Kayro (Developer)</p>
                <a href=""><img src={LinkedIn}/></a>
            </section>
        </div>
    </div>
)

export default Footer