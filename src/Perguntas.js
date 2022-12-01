import cards from './cards.js';
import Card from './Card.js';
export default function Perguntas(){
    return(<>
        {cards.map((elem, index)=>
            <Card pergunta={elem.question}>Pergunta {index+1}</Card>
        )}
    </>)
}