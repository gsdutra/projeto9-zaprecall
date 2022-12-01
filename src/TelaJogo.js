import logo from './assets/img/logo.png';
import React, { Children } from 'react';
import styled from 'styled-components';

export default function TelaJogo(props){
    return(<>
        <Content visible={props.telaBV}>
            <Logo>
                <img src={logo}/>
                <Text>ZapRecall</Text>
            </Logo>
            {props.children}
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