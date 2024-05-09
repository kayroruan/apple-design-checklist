import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";

import GrayArrow from '../../assets/images/gray-arrow.svg';

import RegUiImg from '../../assets/images/reg-ui.jpg'

const TvOs = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="TvOs">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/tvOS">tvOS</Link></div>
            <h2>tvOS</h2>
            <List title="Checklist Geral">
                <img src={RegUiImg} alt="" className="imgNavPag" />
                <ItemList text="A experiência do seu app traz uma sensação de realismo com várias camadas de imagem, 
                transparência, escalas e animação, pra se conectar com os usuários."></ItemList>
                <ItemList text="Os ícones possuem imagens em camadas (essa separação com o uso de transparência, 
                causa um efeito de profundidade. Produzindo também um efeito 3D) que suportam o efeito parallax."></ItemList>
                <ItemList text="O app contém o sistema de foco do tvOS, que destaca e expande elementos da tela 
                conforme as pessoas movem elas, ajudando elas a entenderem onde estão e o que estão fazendo 
                (importante pois a interação na Tv acontece por controle remoto)"></ItemList>
                <ItemList text="O app tem animações fluidas que deixa o usuário em uma experiência cinemática clara e legível"></ItemList>
                <ItemList text="O app tem dark mode"></ItemList>
                <ItemList text="Possui imagens de alta qualidade que são escaláveis"></ItemList>
                <ItemList text="O app utiliza SF Symbols"></ItemList>
                <ItemList text="O app utiliza SF Symbols"></ItemList>
                <ItemList text="A privacidade do usuário está sendo protegida, informando a ele quais dados dele vão ser usados"></ItemList>
                <ItemList text="O app possui acessibilidade"></ItemList>
                <ItemList text="No app está sendo utilizado o sistema de escala em pontos da Apple para definir a qualidade dos elementos da tela"></ItemList>
                <div>
                    <a className="moreContent" onClick={toggleExpanded}>
                        {expanded ? 'Menos sobre esses pontos' : 'Mais sobre esses pontos'}
                        <span style={{ fontSize: 'inherit', verticalAlign: 'middle', width: '10px', height: '10px', borderLeft: '2px solid', borderBottom: '2px solid', transform: expanded ? 'rotate(315deg)' : 'rotate(225deg)' }}></span>
                    </a>
                    {expanded && (
                        <div className="moreContent_content">
                            <label>
                                Uma tela com resolução baixa, tem uma proporção de 1:1 pixels (@1x), onde um pixel é igual a 1 ponto.<br /><br />
                                Telas com uma qualidade melhor possuem uma proporção de 2:1 ou 3:1.
                                A 2:1 (@2x) tem um fator de escala de 2 e a 3:1 (@3x) tem um fator de escala de 3. Ou seja, tem vários pixels dentro de um ponto, quanto mais pixels melhor a qualidade.<br /><br />
                                Cada plataforma usa um fator de escala diferente:
                            </label><br />
                            <label className="opacity">
                                OS - recomendado: @2x e @3x<br />
                                iPadOS - recomendado: @2x<br />
                                macOS, tvOS - recomendado: @1x e @2x <br />
                                watchOS - recomendado: @2x<br />
                            </label>
                            <img src="" alt="" /><img src="" alt="" />
                        </div>
                    )}
                </div>
                <ItemList text=" A escala de pontos está correta para a plataforma" subtext="macOS, tvOS - recomendado: @1x e @2x"></ItemList>
            </List>
        </div>
    )
}

export default TvOs