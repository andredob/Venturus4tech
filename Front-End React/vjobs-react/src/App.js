import React, { Component } from 'react';

import Cabecalho from './components/navigation/Header/Header';
import Lista from './components/job/JobsList/JobsList';
import Main from './components/navigation/Main/Main';
import About from './components/About/About'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Cabecalho />

        <Main>
          
          <Switch> 
            <Route path='/vagas' component={ Lista }></Route>
            <Route path='/sobre' component={ About }></Route>
            <Route exact path='/' component={ Lista }></Route> {/* o exact serve para não cair em outros urls */}
          </Switch>
        </Main>
        
      </div>
    );
  }
}

export default App;
