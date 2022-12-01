import React from 'react';
import styled from 'styled-components';
import logo from './assets/img/logo.png';

export default function BoasVindas(props){
    return(
        <Content telaBVi={props.telaBV}>
            <Centered>
                <img src={logo}/>
                <Text>ZapRecall</Text>
                <Butt onClick={props.func}>Iniciar Recall!</Butt>
            </Centered>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FB6B6B;
    display: ${p=>p.telaBVi? 'flex':'none'};
    align-items: center;
    justify-content: center;
`
const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.div`
    color: white;
    margin-top: 13px;
    padding: 3px;

    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
`
const Butt = styled.div`
    margin-top: 30px;
    font-family: Recursive;

    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;

    background: #FFFFFF;
    color: #D70900;
    border-radius: 5px;
    border: 1px solid #D70900;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 246px;
    transition: .3s;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: .3s;
    }

`