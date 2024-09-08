import React, { useState } from "react";
import { Link } from "react-router-dom";

import List from "../../components/List/List.jsx";
import ItemList from "../../components/List/ItemList.jsx";

import GrayArrow from '../../assets/images/gray-arrow.svg';

import window from '../../assets/images/acess-window.svg'



const Ios = ({ moreContent = "" }) => {
    return (
        <div className="Ios">
            <div className="MiniLink"><Link to="/">Homepage</Link><img src={GrayArrow} alt="" /><Link to="/iOS">Acessibilidade</Link></div>
            <h2 style={{color: '#121212', background: 'none'}}>Acessibilidade</h2>
            <List title="Checklist Geral">
                <img src={window} alt="" className="imgNavPag"/>
                <ItemList text="O app possui suporte para as tecnologias de acessibilidade: VoiceOver, Assistive Touch, Pointer Control and Switch Control"></ItemList>
                <ItemList text="Os gestos são simples e comuns no app (gestos complexos como uso de 2 dedos, pressionar por muito tempo ou movimentos repetitivos podem ser desafiadores pra muitas pessoas)"></ItemList>
                <ItemList text="Há mais de uma opção de gesto para realizar alguma atividade para pessoas que não consigam fazer de uma forma só (como utilizar scroll em um carrossel mas também dar opção de passar para o lado clicando em uma seta)"></ItemList>
                <ItemList text="Os usuários conseguem inserir informações falando em vez de digitar (você pode personalizar o teclado que abre ao clicar no campo adicionando a opção de microfone nele)"></ItemList>
                <ItemList text="O app tem suporte à sensação de toque do sistema como quando selecionamos algum elemento e o celular vibra, isso da uma resposta sensorial importante para o usuário, muitas pessoas confiam nesse feedback sensorial quando não podem ver a tela (https://developer.apple.com/design/human-interface-guidelines/playing-haptics)"></ItemList>
                <ItemList text="As imagens possuem descrições alternativas (o VoiceOver lê o texto ao redor da imagem e as legendas, então é interessante descrever as informações transmitidas pela imagem)"></ItemList>
                <ItemList text='As imagens decorativas que não precisam comunicar algo importante estão "escondidas" das tecnologias assistivas, assim não desperdiçam o tempo do usuário ou sobrecarregam ele com informações através do VoiceOver'></ItemList>
                <ItemList text="Os títulos das páginas são específicos e descritivos para que o usuário entenda de fato o que ele tem que fazer na tela ou qual o conteúdo que ele vai encontrar nela, textos separando grupos de informações na tela também ajudam os usuários a entender a estrutura da tela"></ItemList>
                <ItemList text="Os áudios e vídeos possuem coisas como: legendas, descrições de áudio e transcrições"></ItemList>
                <ItemList text="O layout do app se adapta a diferentes tamanhos de fonte (veja se é necessário ajustar o layout nos casos de fontes em tamanhos grandes, talvez ícones precisem aumentar junto de um texto quando forem correlacionados)"></ItemList>
                <ItemList text="O app não possui pesos de fonte que sejam muito difíceis de ver como: Ultralight, Thin e Light"></ItemList>
                <ItemList text="O layout do seu app se adapta caso o usuário ative o texto em negrito"></ItemList>
                <ItemList text="O app não possui textos justificados, apenas textos alinhados à esquerda (ou justificação à direita em línguas da direita para a esquerda)"></ItemList>
                <ItemList text="Sempre há outro elemento que distingue informações junto com cores (evite usar cores como a única forma de distinguir dois estados/valores, como colocar um gráfico onde a única coisa que diferencie os dados das colunas são as cores, para algumas pessoas é difícil diferenciar cores)"></ItemList>
                <ItemList text='O app usa preferencialmente cores do sistema em textos, quando os usuários ativam modos como "Inverter cores" ou "Aumentar contraste", as cores do sistema se adaptam automaticamente (garanta que as telas do app se adaptam corretamente à esses modos)'></ItemList>
                <ItemList text="O app possui cores com bom contraste"></ItemList>
            </List>
        </div>
    )
}


export default Ios