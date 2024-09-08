import React from "react";

import './Home.css';
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

import HomeImg from '../../assets/images/home.jpg'
import AppleImg from '../../assets/images/apple.svg'
import RegUiImg from '../../assets/images/reg-ui.svg'
import IosImg from '../../assets/images/ios-img.svg'
import WatchOsImg from '../../assets/images/watchos-img.svg'
import IPadOsImg from '../../assets/images/ipados-img.svg'
import macOsImg from '../../assets/images/macos-img.svg'
import tvOSImg from '../../assets/images/tvos-img.svg'
import iphoneImg from '../../assets/images/iphone.png'
import macbookImg from '../../assets/images/macbook.png'
import applewatchImg from '../../assets/images/applewatch.png'
import RegLojaImg from '../../assets/images/regras-loja.svg'
import CardProDes from '../../assets/images/card-pro-des.svg'
import Acessibilidade from '../../assets/images/acessibilidade.svg'



const Home = props => (
    <div className="Home">
        <header className="Header">
            <section>
                <img src={AppleImg} alt="" />
                <h1>Apple Design Checklist</h1>
                <p>Cheque aqui se seus designs estão seguindo as regras da Apple :)</p>
            </section>
            <img src={HomeImg} className="HomeImg" alt="" />
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

            <section className="grid-container">
                <div className="item1">
                    <Link to='/iOS' className="link-custom">
                        <Card titulo="IOS" tamanho="pequeno" imagem={IosImg} />
                    </Link>
                </div>
                <div className="item1">
                    <Link className="link-custom">
                        <Card titulo="watchOS" tamanho="pequeno" imagem={WatchOsImg} unable />
                    </Link>
                </div>
                <div className="item1 unable">
                    <Link className="link-custom">
                        <Card titulo="IPadOS" tamanho="pequeno" imagem={IPadOsImg} unable />
                    </Link>
                </div>
                <div className="item1 unable">
                    <Link className="link-custom">
                        <Card titulo="macOS" tamanho="pequeno" imagem={macOsImg} unable />
                    </Link>
                </div>
                <div className="item2">
                    <Link to='/tvOS' className="link-custom">
                        <Card titulo="tvOS" tamanho="medio" imagem={tvOSImg} />
                    </Link>
                </div>
            </section>

            <h3>Vai publicar seu app?</h3>

            <Link to='/regras-de-loja' className="link-custom">
                <Card titulo="Regras da loja" tamanho="medio" imagem={RegLojaImg}></Card>
            </Link>

            <h3>Procurando sobre acessibilidade?</h3>

            <Link to='/acessibilidade' className="link-custom">
                <Card titulo="Acessibilidade" tamanho="medio" imagem={Acessibilidade}></Card>
            </Link>

            <h3>Artigos relacionados: O que um Product Designer de Apps precisa saber?</h3>

            <div className="CardProDes" style={{ cursor: 'pointer' }}>
                <img src={CardProDes} alt="" />
                <section>
                    <h2>O que é necessário saber para ser um Product Designer focado em Apps Mobile?</h2>
                    <p>Um guia básico para quem já tem conhecimentos de UX Design e quer começar a se especializar em aplicativos.</p>
                </section>
            </div>

            <p className="RefCheck">Este site foi inspirado no <a href=""><b style={{ color: '#979797' }}>Checklist Design</b></a> de <b>George Hatzis</b>.</p>
        </nav>
    </div>
)

export default Home