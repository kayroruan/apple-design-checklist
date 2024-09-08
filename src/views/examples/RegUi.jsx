import React from "react";
import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";
import Card from "../../components/Cards/Card";

import GrayArrow from '../../assets/images/gray-arrow.svg';
import window from '../../assets/images/reg-ui-window.svg';
import TextSpacePrev1 from '../../assets/images/text_space_preview1.svg';
import TextSpacePrev2 from '../../assets/images/text_space_preview2.svg';
import ElementSpacePrev from '../../assets/images/element_space_preview.svg';
import RegLojaImg from '../../assets/images/regras-loja.svg'


const RegUi = () => {
    return (
        <div className="RegUi">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/regras-gerais-de-UI">Regras gerais de UI</Link></div>
            <h2 style={{color: '#121212', background: 'none'}}>Regras gerais de UI</h2>
            <nav>
                <List title="CheckList Geral">
                    <img src={window} alt="" className="imgNavPag" />
                    <ItemList text="O design está responsivo para cada tamanho de device"></ItemList>
                    <ItemList text="O app possui elementos próprios para mobile, pra melhor interação (iOS)"></ItemList>
                    <ItemList text="O espaçamento dos elementos está próprio pro dedo do usuário (44pt x 44pt)"></ItemList>
                    <img src={ElementSpacePrev} alt="" className="imgList2" />
                    <ItemList text="Os textos tem no mínimo 11pt para serem legíveis"></ItemList>
                    <ItemList text="O app tem bom contraste, sendo assim todos os textos e elementos legíveis"></ItemList>
                    <ItemList text="Os textos tem bom espaçamento"></ItemList>
                    <img src={TextSpacePrev1} alt="" className="imgList2" />
                    <ItemList text="As imagens tem alta resolução para melhor visualização"></ItemList>
                    <ItemList text="As imagens não estão distorcidas"></ItemList>
                    <ItemList text="Os elementos estão bem organizados, o app possui um layout fácil de ler"></ItemList>
                    <ItemList text="Possui bom alinhamento de textos, imagens e botões"></ItemList>
                    <img src={TextSpacePrev2} alt="" className="imgList2" />
                    <a href="" className="LinkSpacePrev">https://developer.apple.com/design/tips/</a>
                </List>

                <Link to='/regras-de-loja' className="link-custom">
                    <Card titulo="Regras da loja" tamanho="medio" imagem={RegLojaImg}></Card>
                </Link>
            </nav>
        </div>
    );
}

export default RegUi