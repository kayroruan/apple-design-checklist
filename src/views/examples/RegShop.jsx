import React from "react";
import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";

import GrayArrow from '../../assets/images/gray-arrow.svg';
import window from '../../assets/images/reg-shop-window.svg';
import ConfigIcon from '../../assets/images/config_icon.svg';
import AppBankIcon from '../../assets/images/app_bank_icon.svg';


const RegShop = () => {
    return (
        <div className="RegShop">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/regras-de-loja">Regras da loja / iOS</Link></div>
            <h2 style={{color: '#121212', background: 'none'}}>Regras da loja / iOS</h2>
            <nav>
                <List title="CheckList Geral">
                    <img src={window} alt="" className="imgNavPag" />
                    <p className="Detail">*Os mockups da loja são as imagens de apresentação do aplicativo, os tamanhos fornecidos são das imagens em si e não o tamanho da tela de cada device.</p>
                    <ItemList text="Os mockups da loja tem tamanhos diferentes de acordo com cada device proposto"
                        subtext={<><span>iPad 2 Geração - recomendado: 2048x2732 px </span><br />
                            <span>iPad 6 Geração - recomendado: 2048x2732 px </span><br />
                            <span>iPhone 5.5 inch - recomendado: 1242x2208 px </span><br />
                            <span>iPhone 6.5 inch - recomendado: 1284x2778 px</span></>}>
                    </ItemList>
                    <ItemList text="Os usuários estão de acordo com as informações que estão sendo coletadas
                     (ele aceita tudo isso nos termos e condições do app)" subtext="*Isso é avaliado durante o tempo de review do app antes de subir na loja e pode voltar caso haja inconsistências nisso."></ItemList>
                    <ItemList text="Tem opção de aceitar termos e condições do app no cadastro"></ItemList>
                    <ItemList text="O app possui cadastro" subtext="*Caso seja necessário seu app não ter cadastro, basta explicar a relevância pro seu negócio e a Apple irá avaliar."></ItemList>
                    <ItemList text="O onboarding é limpo e não possui alerts que interrompem o fluxo"></ItemList>
                </List>
                <List title="Ícones">
                    <p className="Detail">Mais informações: https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons</p>
                    <ItemList text="O ícone está detalhado e realista com a sensação de que “sai da tela”, usando 
                    camadas para causar essa sensação de profundidade"></ItemList>
                    <img src={ConfigIcon} alt="" className="imgList" />
                    <ItemList text="O ícone segue as regras de dimensões impostas pela Apple (tamanho padrão: 1024×1024 px)"></ItemList>
                    <ItemList text="O ícone não possui texto dentro" subtext="O ícone não possui texto dentro"></ItemList>
                    <ItemList text="O ícone não possui borda" subtext="*iOS automaticamente adiciona uma borda de 1 pixel nos ícones."></ItemList>
                    <ItemList text="O ícone está em PNG"></ItemList>
                    <ItemList text="O texto embaixo do ícone/título do app possui no máximo 13 caracteres"
                        subtext="*Essa também é uma recomendação pois a partir disso o título do aplicativo na homepage do celular do usuário fica com “...” pois não é possível aparecer todo"></ItemList>
                    <img src={AppBankIcon} alt="" className="imgList" />
                </List>
            </nav>
        </div>
    );
};


export default RegShop