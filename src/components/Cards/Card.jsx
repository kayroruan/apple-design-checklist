import React from 'react';
import Coming from '../Coming/Coming.jsx'

import './Card.css';

const Card = (props) => {
    const { titulo, subtitle, imagem, tamanho, unable } = props;

    let tamanhoClasse = '';

    if (tamanho === 'pequeno') {
        tamanhoClasse = 'pequeno';
    } else if (tamanho === 'medio') {
        tamanhoClasse = 'medio';
    } else if (tamanho === 'grande') {
        tamanhoClasse = 'grande';
    }

    return (
        <div className={`Card ${tamanhoClasse} ${unable ? "unable" : ""}`}>
            <section>
                <h2>{titulo}</h2>
                <p>{subtitle}</p>
            </section>
            <img src={imagem} alt="" />
            {unable && <Coming tamanho="grande"/>}
        </div>
    );
};

export default Card;