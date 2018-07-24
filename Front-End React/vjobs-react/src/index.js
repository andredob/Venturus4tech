import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'; //define a url base dele antes de tudo que é a url do servidor

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
