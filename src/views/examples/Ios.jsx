import React from "react";
import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";

import GrayArrow from '../../assets/images/gray-arrow.svg';


const Ios = () => {
    return (
        <div className="Ios">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/iOS">iOS</Link></div>
            <h2>iOS</h2>
            <List title="Checklist Geral">
                <ItemList text="No app está sendo utilizado o sistema de escala em pontos da Apple para definir a qualidade dos elementos da tela"></ItemList>
                <ItemList text="A escala de pontos está correta para a plataforma" subtext="iOS - recomendado: @2x e @3x"></ItemList>
                <ItemList text="As imagens tem ótima qualidade"></ItemList>
                <ItemList text="As fotos no app são JPEG (bem otimizada) ou HEIC (HEIC é uma extensão de arquivo que a Apple usa para o formato de imagem HEIF)"></ItemList>
                <ItemList text="Os ícones planos, ícones de interface e outras artes planas que necessitam de uma escala de alta resolução no app são em PDF ou SVG"></ItemList>
                <ItemList text="O app tem dark mode"></ItemList>
                <ItemList text="O app utiliza SF Symbols"></ItemList>
                <ItemList text="A privacidade do usuário está sendo protegida, informando a ele quais dados dele vão ser usados"></ItemList>
                <ItemList text="O app possui acessibilidade"></ItemList>
            </List>
        </div>
    )
}


export default Ios