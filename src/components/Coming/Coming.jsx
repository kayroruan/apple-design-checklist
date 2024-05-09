import React from 'react';

import './Coming.css';

const Coming = (props) => {
    const { tamanho } = props;

    let tamanhoClasse = '';

    if (tamanho === 'pequeno') {
        tamanhoClasse = 'pequeno';
    } else if (tamanho === 'grande') {
        tamanhoClasse = 'grande';
    }

    return (
        <div className={`Coming ${tamanhoClasse}`}>
                <span>Em breve</span>
        </div>
    );
};

export default Coming;