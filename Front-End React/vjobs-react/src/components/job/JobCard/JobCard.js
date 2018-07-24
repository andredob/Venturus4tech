import React from 'react';

import imgDeveloper from '../../../assets/images/developer.png'
import imgDesign from '../../../assets/images/designer.png'
import imgTeste from '../../../assets/images/tester.png'

const jobCard = (props) => {

    let imagem = null;

    switch (props.area) {
        case 'Desenvolvimento':
            imagem = imgDeveloper;
            break;
    
        case 'Design':
            imagem = imgDesign;
            break;
        case 'Teste':
            imagem = imgTeste;
            break;
        default :
        break;
    }

    return (
        <div className="card mb-2">
            <img className="card-img-top" src={imagem}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <h6>Descrição:</h6>
                    <div>
                        {props.description}
                    </div>    
                    <br/>
                    <h6>Salário:</h6>
                    <div>R$: {props.salario}</div>
                </p>
                <button onClick={props.editHendler} href="#" className="btn btn-primary" style={{background: "gold" , borderColor: "gold"}}> 
                    <i className="far fa-edit"></i>    
                </button>
                <button onClick={props.removeHandler} href="#" className="btn btn-primary" style={{background: "red", borderColor: "red"}}> 
                    <i className="far fa-trash-alt"></i>
                </button>

            </div>
        </div>

 )}

 export default jobCard;