import React, {Component} from 'react';

import Card from '../JobCard/JobCard';
import Loading from "../../navigation/Loading/Loading"; //Omitir o tipo de arquivo é lido como .js
import axios from 'axios';

class JobsList extends Component{
    
    state = {
        jobs: []
    }

    componentDidMount() {             //Eu só posso chamar o setState se o componenteja está montado
                                      //Caso o state possua outros atributos, o setState não sobreescreve os outros
        axios.get('/jobs')
        .then(response => {
            this.setState({ jobs : response.data})
        })
        .catch(error => {
            console.error(error)
        })
    }

    //Delete
    jobRemoveHandler = (id,name) =>{
        if( window.confirm(`Deseja Realmente excluir a vaga "${name}"?`)){
            axios.delete(`/jobs/${id}`).then( () => 
            window.alert(`"${name}" Excluido com sucesso!`));
        }
    }

    //Edit
    jobEditHendler = (id) => {
        console.log(`Editar ${id}`);
    }

    // let vagasEncontradas = (this.state.jobs.legngth === 0) ? carregar vagas : loading (: <- "else")

    render() { //Retorna o que eu quero renderizar no meu componente
        let vagasEncontradas = 
            this.state.jobs.map(vaga => {
                return  <div className='col-sm-12 col-md-6 col-lg-4'>
                            <Card
                                name={vaga.name}
                                description={vaga.description}
                                salario={vaga.salary}
                                area={vaga.area}
                                removeHandler={() => this.jobRemoveHandler(vaga.id, vaga.name)}
                                editHendler={() => this.jobEditHendler(vaga.id)}
                            />
                        </div>
            })
        
        if(this.state.jobs.length != 0){        
            return(
                <div className="row">
                    {vagasEncontradas}
                </div>
            )
        } else {
            return(
                <div className="row">
                    <Loading/>
                </div>
            )
        }
    }
}






export default JobsList; //J maiusculo pois é o nome da classe