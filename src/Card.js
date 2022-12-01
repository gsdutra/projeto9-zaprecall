import styled from "styled-components"
import React from 'react';
import setaVirar from "./assets/img/seta_virar.png";

export default function Card(props){

    const [pergVirada, setVirada] = React.useState(false);

    function play(){
        setVirada(true);
    }

    function virar(){

    }


    return(<>
        <PerguntaFechada pergVirada={pergVirada}>
            <p>{props.children} </p> <ion-icon name="play-outline" Style="font-size: 28px; cursor:pointer;" onClick={play}></ion-icon>
        </PerguntaFechada>
        <PerguntaAberta pergVirada={pergVirada}>
            <p>{props.pergunta} </p> <img src={setaVirar} onClick={virar}></img>
        </PerguntaAberta>
    </>)
}

const PerguntaFechada = styled.div`
    display: ${p => p.pergVirada? 'none':'flex'};

    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

`

const PerguntaAberta = styled.div`
    display: ${p => p.pergVirada? 'flex':'none'};

    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img{
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`