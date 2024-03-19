import React from "react";
import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";

import GrayArrow from '../../assets/images/gray-arrow.svg';


const RegUi = () => {
    return (
        <div className="RegUi">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/regras-gerais-de-UI">Regras gerais de UI</Link></div>
            <h2>Regras gerais de UI</h2>
            <nav>
                <List title="CheckList Geral">
                    <ItemList text="O design está responsivo para cada tamanho de device"></ItemList>
                    <ItemList text="O app possui elementos próprios para mobile, pra melhor interação (iOS)"></ItemList>
                    <ItemList text="O espaçamento dos elementos está próprio pro dedo do usuário (44pt x 44pt)"></ItemList>
                    <ItemList text="Os textos tem no mínimo 11pt para serem legíveis"></ItemList>
                    <ItemList text="O app tem bom contraste, sendo assim todos os textos e elementos legíveis"></ItemList>
                    <ItemList text="Os textos tem bom espaçamento"></ItemList>
                    <ItemList text="As imagens tem alta resolução para melhor visualização"></ItemList>
                    <ItemList text="As imagens não estão distorcidas"></ItemList>
                    <ItemList text="Os elementos estão bem organizados, o app possui um layout fácil de ler"></ItemList>
                    <ItemList text="Possui bom alinhamento de textos, imagens e botões"></ItemList>
                </List>
            </nav>
        </div>
    );
}

export default RegUi