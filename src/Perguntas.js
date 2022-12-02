import cards from './cards.js';
import Card from './Card.js';
import styled from "styled-components"


export default function Perguntas(props){
    return(<>
        {cards.map((elem, index)=>
            <Card pergunta={elem.question} resposta={elem.answer} increment={props.increment}>Pergunta {index+1}</Card>
        )}
        <Spacing/>
    </>)
}

const Spacing = styled.div`
    height: 100px;
`