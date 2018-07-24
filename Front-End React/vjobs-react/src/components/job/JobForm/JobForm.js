import React,{Component} from 'react';
import axios from 'axios';

class JobForm extends Component{

    state = {
        newJob : {}
    }

    postDataHandler = (event) =>{
        let novaVaga = {
            ...this.state.newJob //spread operator só copia os valores, dem precisar pegar por referencia
        };

        axios.post('/jobs', novaVaga)
            .then((response) => {
                novaVaga.id = response.data;
                this.props.addToList(novaVaga);
            })
            .catch(() =>{
                
            })

    event.preventDefault();
    }

    changeValueHadler = (nomeAtributo, valor) => {
        let currentJob = this.state.newJob;

        currentJob[nomeAtributo] = valor; //modifica um atributo com o valor que eu quero, ex: nomeAtributo=salario valor=300
        
        this.setState({ newJob : currentJob});
    }

    render(){
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputName">Nome</label>
                        <input 
                            onChange={(event) => 
                                this.changeValueHadler('name', event.target.value)//event.target se refere ao botão que esta sendo clicado
                            }
                            type="text" 

                            className="form-control" id="inputName"/>
                    </div>
                </div>

                {/* <!--classNamee "textarea" serve para colocar quantas rows se quer adicionar a uma caixa de texto-->
                <!--Descrição-->     */}
                <div className="form-group">
                    <label htmlFor="inputDescription">Descrição</label>
                    <textarea 
                    onChange={(event) => 
                        this.changeValueHadler('descricão', event.target.value)
                    }
                    className="form-control" id="inputDescription" rows="3"></textarea>
                </div>

                <div className="form-row">
                    {/* <!--Habilidades--> */}
                    <div className="form-group col-md-6">
                        <label htmlFor="inputHabilities">Habilidades</label>
                        <textarea 
                        onChange={(event) => 
                            this.changeValueHadler('habilidades', event.target.value)
                        }
                        className="form-control" id="inputHabilities" rows="3"></textarea>
                    </div>

                    {/* <!--Competencias--> */}
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCompetencias">Competencias</label>
                        <textarea 
                        onChange={(event) => 
                            this.changeValueHadler('competencias', event.target.value)
                        }
                        className="form-control" id="inputCompetencias" rows="3"></textarea>
                    </div>
                </div>

                <div className="form-row">
                    {/* <!--Sálario Base--> */}
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSalary">Salário Base</label>
                        <input 
                        onChange={(event) => 
                            this.changeValueHadler('salary', event.target.value)
                        }
                        className="form-control" id="inputSalary"></input>
                    </div>

                    {/* <!--Área--> */}
                    <div className="form-group col-md-6">
                        <label htmlFor="inputArea">Área</label>
                        <select 
                        onChange={(event) => 
                            this.changeValueHadler('area', event.target.value)
                        }
                        id="inputArea" className="form-control">
                            <option disabled selected>Selecione...</option>
                            <option>Teste</option>
                            <option>Design</option>
                            <option>Desenvolvimento</option>
                        </select>
                    </div>
                </div>

                {/* <!--Check Box--> */}
                <div className="form-group">
                    <div className="form-check">
                        <input 
                        onChange={(event) => 
                            this.changeValueHadler('isPdc', event.target.value)
                        }
                        className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Vaga para PDC
                        </label>
                    </div>
                </div>

                {/* <!--Botão Criar Vaga--> */}
                <button type="button" className="btn btn-primary mb-2"
                onClick={this.postDataHandler}>Salvar Vaga</button>
            </form>
        )
    }
}

export default JobForm;