import React from 'react';

import './Card.css';

const Card = (props) => {
    const { titulo, subtitle, imagem, tamanho } = props;

    let tamanhoClasse = '';

    if (tamanho === 'pequeno') {
        tamanhoClasse = 'pequeno';
    } else if (tamanho === 'medio') {
        tamanhoClasse = 'medio';
    } else if (tamanho === 'grande') {
        tamanhoClasse = 'grande';
    }

    return (
        <div className={`Card ${tamanhoClasse}`}>
            <section>
                <h2>{titulo}</h2>
                <p>{subtitle}</p>
            </section>
            <img src={imagem} alt="" />
        </div>
    );
};

export default Card;