import React from 'react'; //como é o nome direto ele procura um pacote
import logo from '../../../assets/images/logo-h-vjobs.png';

const header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">
            <img src={logo} style={{width : '100px'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
                <li className="nav-item ">
                    <a className="nav-link" style={{color: "royalblue"}} href="#">Vagas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{color:"royalblue"}} href="#">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default header; //sem isso esse header não pode ser importado