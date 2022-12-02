import styled from "styled-components"
import React from 'react';
import setaVirar from "./assets/img/seta_virar.png";
import icone_certo from './assets/img/icone_certo.png';
import icone_erro from './assets/img/icone_erro.png';
import icone_quase from './assets/img/icone_quase.png';

export default function Card(props){

    const [pergVirada, setVirada] = React.useState(false);

    const [flipped, setFlipped] = React.useState(false);

    const [concluida, setConcluida] = React.useState(false);

    const [imgScore, setImg] = React.useState(icone_certo);

    const [corTxt, setCor] = React.useState('#333333');

    const images = [icone_certo,icone_quase,icone_erro];
    const cores = ['#2FBE34','#FF922E','#FF3030']

    function play(){
        setVirada(!pergVirada);
    }

    function virar(){
        setFlipped(!flipped);
    }

    function selectLevel(score){
        setConcluida(true);
        play();
        setImg(images[score]);
        setCor(cores[score]);
        props.increment();
    }

    return(<>
        <PerguntaFechada pergVirada={pergVirada} concluida={concluida} cor={corTxt}>
            <p>{props.children} </p>

            <ion-icon name="play-outline" onClick={play}></ion-icon>

            <img src={imgScore} alt=""/>
        </PerguntaFechada>


        <PerguntaAberta pergVirada={pergVirada}>

            <Face flipped={flipped}>
                <p>{props.pergunta} </p> <img src={setaVirar} onClick={virar}></img>
            </Face>

            <Face flipped={!flipped}>
                <p>{props.resposta}</p>
                <div>
                    <button Style="background: #FF3030" onClick={()=>selectLevel(2)}>Não lembrei</button>
                    <button Style="background: #FF922E" onClick={()=>selectLevel(1)}>Quase não lembrei</button>
                    <button Style="background: #2FBE34" onClick={()=>selectLevel(0)}>Zap!</button>
                </div>
            </Face>

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
        color: ${p=>p.cor};
        
        text-decoration:${p=>p.concluida?'line-through':'none'};
    }
    ion-icon{
        font-size: 28px;
        cursor:pointer;
        display: ${p=>p.concluida?'none':'flex'};
    }
    img{
        display: ${p=>p.concluida?'flex':'none'};
    }

`

const PerguntaAberta = styled.div`
    display: ${p => p.pergVirada? 'flex':'none'};

    margin: 12px;
    padding-bottom: 30px;
    padding-right: 30px;
    position: relative;
    width: 300px;
    min-height: 100px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
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

const Face = styled.div`  

    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    
  
    /* Flip Face */
    transform: rotateY(${p => p.flipped? "180deg" : "0deg"});  
    backface-visibility: hidden;  
    transition: transform 1s;
  
    /* Overlap Faces */  
    position: absolute;
  
    width: 100%;  
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        display: flex;
        justify-content: space-between;

            button {
                cursor: pointer;
                width: 90px;
                font-family: 'Recursive';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                color: #FFFFFF;
                border-radius: 5px;
                border: 1px solid transparent;
                padding:5px;
            }
    }
`