import styled from "styled-components";
import icone_certo from './assets/img/icone_certo.png';
import icone_erro from './assets/img/icone_erro.png';
import icone_quase from './assets/img/icone_quase.png';
import party from './assets/img/party.png';
import sad from './assets/img/sad.png';

export default function Footer(props){

    const images = [icone_certo,icone_quase,icone_erro];

    function defAcertos(lvl){
        return (
            <img src={images[lvl]} alt=""/>
        )
    }

    return(<>
        <Foot>
            <Mensagem>
                {props.finalizou? (props.acertos.includes(2)?
                        <>
                        <img src={sad} alt=""/> Putz...
                        <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
                        </>
                    :
                        <>
                        <img src={party} alt=""/> Parabéns!
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        </>
                    )
                    :''}
            </Mensagem>
            <div>
                {props.concluidos}/{props.total} CONCLUÍDOS
            </div>
            <Icons>
                {props.acertos.map((e)=>defAcertos(e))}
            </Icons>
        </Foot>
    </>)
}
const Mensagem = styled.div`
    text-align: center;
    margin: 15px;
    font-family: Recursive;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;

    img{
        vertical-align: middle;
    }
    p{
        margin-top: 15px;
        font-weight: 400;
        line-height: 21.6px;
    }
`

const Foot = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const Icons = styled.div`
    margin-top: 6px;
    img{
        padding: 2.5px;
    }
`