import React from "react";
import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";

import GrayArrow from '../../assets/images/gray-arrow.svg';


const TvOs = () => {
    return (
        <div className="TvOs">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/tvOS">tvOS</Link></div>
            <h2>tvOS</h2>
            <List title="Checklist Geral">
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
                <ItemList text=" A escala de pontos está correta para a plataforma" subtext="macOS, tvOS - recomendado: @1x e @2x"></ItemList>
            </List>
        </div>
    )
}

export default TvOs