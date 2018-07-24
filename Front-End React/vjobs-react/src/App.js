import React, { Component } from 'react';

import Cabecalho from './components/navigation/Header/Header';
import Form from './components/job/JobForm/JobForm';
import JobsList from './components/job/JobsList/JobsList';
import Collapse from './hoc/Collapse/Collapse';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Cabecalho />
        <div className="container">
          <Collapse collapseId="Form" innerText="Criar vaga">
            <Form/>
          </Collapse>
          <JobsList/>
        </div>
      </div>
    );
  }
}

export default App;
