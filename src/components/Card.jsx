import React from 'react';

import './Card.css';

const Card = (props) => {
    const { titulo, subtitle, imagem, tamanho } = props;

    let tamanhoEstilo = {};

    if (tamanho === 'medio') {
        tamanhoEstilo = { width: '100px', height: '150px' };
    } else if (tamanho === 'pequeno') {
        tamanhoEstilo = { width: '40%', height: '30vh' };
    } else if (tamanho === 'grande') {
        tamanhoEstilo = { width: '85%', height: '45vh' };
    }

    return (
        <div className='Card' style={{ ...tamanhoEstilo }}>
            <section>
                <h2>{titulo}</h2>
                <p>{subtitle}</p>
            </section>
            <img src={imagem} alt="" />
        </div>
    );
};

export default Card;