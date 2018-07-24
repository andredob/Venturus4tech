import React from 'react'; //como é o nome direto ele procura um pacote
import logo from '../../../assets/images/logo-h-vjobs.png';
import { Link } from 'react-router-dom'

const header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand" to='/'> {/* o to serve para direcionar o usuario quando clicar */}
            <img src={logo} style={{width : '100px'}}/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
                <li className="nav-item ">
                    <Link className="nav-link" style={{color: "royalblue"}} to='/vagas'>Vagas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{color:"royalblue"}} to="/sobre">Sobre</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default header; //sem isso esse header não pode ser importado