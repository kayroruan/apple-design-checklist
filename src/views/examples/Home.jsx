import React from "react";

import './Home.css';
import Card from "../../components/Card";

import HomeImg from '../../assets/images/home.jpg'
import Apple from '../../assets/images/apple.svg'
import RegUi from '../../assets/images/reg-ui.jpg'
import Ios from '../../assets/images/ios-img.jpg'
import WatchOs from '../../assets/images/watchos-img.jpg'
import IPadOs from '../../assets/images/ipados-img.jpg'
import macOs from '../../assets/images/macos-img.jpg'


const Home = props => (
    <div>
        <div className="banner">
            <section>
                <img src={Apple} alt="" />
                <h1>Apple Design Checklist</h1>
                <p>Cheque aqui se seus designs estão seguindo as regras da Apple :)</p>
            </section>
            <img src={HomeImg} alt="" />
        </div>

        <section className="CardPosition">
            <Card titulo="Regras gerais de UI" subtitle="Veja as principais regras de layout
            , o que fazer e não fazer." tamanho="grande" imagem={RegUi}></Card>
        </section>
        <section className="CardPosition">
            <Card titulo="Regras gerais de UI" tamanho="pequeno" imagem={Ios}></Card>
            <Card titulo="Regras gerais de UI" tamanho="pequeno" imagem={WatchOs}></Card>
        </section>
        <section className="CardPosition">
            <Card titulo="Regras gerais de UI" tamanho="pequeno" imagem={IPadOs}></Card>
            <Card titulo="Regras gerais de UI" tamanho="pequeno" imagem={macOs}></Card>
        </section>
    </div>
)

export default Home