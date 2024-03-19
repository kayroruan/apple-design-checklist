import React from "react";

import './Home.css';
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

import HomeImg from '../../assets/images/home.jpg'
import AppleImg from '../../assets/images/apple.svg'
import RegUiImg from '../../assets/images/reg-ui.jpg'
import IosImg from '../../assets/images/ios-img.jpg'
import WatchOsImg from '../../assets/images/watchos-img.jpg'
import IPadOsImg from '../../assets/images/ipados-img.jpg'
import macOsImg from '../../assets/images/macos-img.jpg'
import tvOSImg from '../../assets/images/tvos-img.jpg'
import iphoneImg from '../../assets/images/iphone.png'
import macbookImg from '../../assets/images/macbook.png'
import applewatchImg from '../../assets/images/applewatch.png'
import RegLojaImg from '../../assets/images/regras-loja.jpg'



const Home = props => (
    <div className="Home">
        <header className="Header">
            <section>
                <img src={AppleImg} alt="" />
                <h1>Apple Design Checklist</h1>
                <p>Cheque aqui se seus designs estão seguindo as regras da Apple :)</p>
            </section>
            <img src={HomeImg} alt="" />
        </header>
        <div className="HeaderImg">
            <img src={iphoneImg} alt="" />
            <img src={macbookImg} alt="" />
            <img src={applewatchImg} alt="" />
        </div>

        <nav>
            <Link to='/regras-gerais-de-UI'><Card titulo="Regras gerais de UI" subtitle="Veja as principais regras de layout,
             o que fazer e não fazer." tamanho="grande" imagem={RegUiImg}></Card></Link> 

            <h3>Para qual plataforma você está desenhando?</h3>

            <section className="CardPosition">
                <Card titulo="IOS" tamanho="pequeno" imagem={IosImg}></Card>
                <Card titulo="watchOS" tamanho="pequeno" imagem={WatchOsImg}></Card>
                <Card titulo="IPadOS" tamanho="pequeno" imagem={IPadOsImg}></Card>
                <Card titulo="macOS" tamanho="pequeno" imagem={macOsImg}></Card>
                <Card titulo="tvOS" tamanho="medio" imagem={tvOSImg}></Card>
            </section>

            <h3>Vai publicar seu app?</h3>

            <Card titulo="Regras da loja" tamanho="medio" imagem={RegLojaImg}></Card>

            <h3>Artigos relacionados: O que um Product Designer de Apps precisa saber?</h3>

            <Card titulo="Regras gerais de UI" subtitle="Veja as principais regras de layout
            , o que fazer e não fazer." tamanho="grande" imagem={RegUiImg}></Card>

            <p className="RefCheck">Este site foi inspirado no <a href=""><b style={{color: '#979797'}}>Checklist Design</b></a> de <b>George Hatzis</b>.</p>
        </nav>
    </div>
)

export default Home