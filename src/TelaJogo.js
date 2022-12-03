import logo from './assets/img/logo.png';
import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js';
import cards from './cards.js';
import Perguntas from './Perguntas.js';

export default function TelaJogo(props){

    const qtdCartas = cards.length;
    const [qtdConcluidos, setConcluidos] = React.useState(0);
    const [arrayAcertos, setAcertos] = React.useState([]);
    const [finalizou, setFinalizou] = React.useState(false);

    function increment(nivel){
        setConcluidos(qtdConcluidos + 1);

        const tempArr = [...arrayAcertos, nivel];
        setAcertos(tempArr);

        if (tempArr.length === qtdCartas){
            setFinalizou(true);
        }
    }

    return(<>
        <Content visible={props.telaBV}>
            <Logo>
                <img src={logo} alt=""/>
                <Text>ZapRecall</Text>
            </Logo>
            <Perguntas qtdConcluidos={qtdConcluidos} increment={increment}/>
            <Footer total={qtdCartas} concluidos={qtdConcluidos} acertos={arrayAcertos} finalizou={finalizou}/>
        </Content>
    </>)
}

const Content = styled.div`
    display: ${p => p.visible?'none':'flex'};

    width: 100%;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 48px;
    margin-bottom: 54px;

    img{
        width: 52px;
        height: auto;
    }
`

const Text = styled.div`
    color: white;
    margin-top: 13px;
    margin-left: 27px;


    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
`